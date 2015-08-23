# File List Generator

Simple JavaScript plugin for generating JSON file list.
Completely client-based, you don't need any server.

- Drag and drop (+ fallback for classic input)
- HTML 5 + JS
- No need jQuery (but you can also use it with jQuery)

## Example

1. Drag and drop some files

- `some-cool-sound.mp3`
- `other-sound.mp3`
- `third-sound.mp3`

2. Get JSON output:

```json
[
    {
        "name": "Some cool sound",
        "filename": "some-cool-sound.mp3"
    },
    {
        "name": "Other sound",
        "filename": "other-sound.mp3"
    },
    {
        "name": "Third sound",
        "filename": "third-sound.mp3"
    }
]
```

## Compatibility
- Google Chrome 44+

## License

Copyright &copy; 2015 [AquaSoup](http://github.com/aquasoup)

Proudly powered by nature, wind, tea and beer ;)

All contents are licensed under the [MIT license].

[MIT license]: LICENSE
