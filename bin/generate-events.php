<?php

use HaydenPierce\ClassFinder\ClassFinder;
use Illuminate\Support\Arr;

require __DIR__ . '/../vendor/autoload.php';

$directories = [
    __DIR__ . '/../vendor/ghostzero/tmi/src/Events/Twitch',
];

$classes = array_merge(
    ClassFinder::getClassesInNamespace('GhostZero\Tmi\Events\Inspector'),
    ClassFinder::getClassesInNamespace('GhostZero\Tmi\Events\Irc'),
    ClassFinder::getClassesInNamespace('GhostZero\Tmi\Events\Twitch')
);

$markdown = collect($classes)
    ->map(function ($class) {
        $parser = new Anodoc\Parser;
        $reflectionClass = new ReflectionClass($class);
        $properties = [];

        foreach ($reflectionClass->getProperties() as $property) {
            $classDocs = $parser->parse($property->getDocComment());
            $data = explode(' ', $classDocs->getTagValue('var'));
            $types = empty($data[0]) ? 'mixed' : $data[0];
            unset($data[0]);
            $description = implode(' ', $data);
            $properties[] = [
                $property->getName(),
                $types,
                $description,
            ];
        }

        $classDocs = $parser->parse($reflectionClass->getDocComment());

        return [
            'class' => $class,
            'class_name' => Arr::last(explode('\\', $class)),
            'title' => str_replace('Event', '', Arr::last(explode('\\', $class))),
            'description' => $classDocs->getDescription(),
            'since' => $classDocs->getTagValue('since'),
            'properties' => $properties,
        ];
    })
    ->map(function ($annotations) {
        $properties = [];

        if (!empty($annotations['properties'])) {
            $properties[] = '| Property | Type(s) | Description |';
            $properties[] = '|----------|---------|-------------|';

            foreach ($annotations['properties'] as $property) {
                $properties[] = "| **{$property[0]}** | `{$property[1]}` | {$property[2]} |";
            }
        }

        $properties = implode(PHP_EOL, $properties);

        return trim("
### {$annotations['title']}

{$annotations['description']}
        
```php
use {$annotations['class']};

\$client->on({$annotations['class_name']}::class, function ({$annotations['class_name']} \$event) {
    // handle your event
});
```

{$properties}

> Since: {$annotations['since']}
");
    })
    ->implode(PHP_EOL . PHP_EOL);

$content = file_get_contents(__DIR__ . '/../docs/docs/events.md.stub');

$content = str_replace('<!-- GENERATED-DOCS -->', $markdown, $content);

file_put_contents(__DIR__ . '/../docs/docs/events.md', $content);


