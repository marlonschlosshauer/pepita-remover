# Pepita-Remover
Removes dummy css classes that are used by [pepita](https://github.com/marlonschlosshauer/pepita)

## Installation
This package is available from [npm](https://www.npmjs.com/) :

``` console
$ npm install -g pepita-remover
```

## Usage

Call ```pepita-remover``` and list the files that you want to clean.

``` console
$ pepita-remover index.html about.html contact.html
```

## Known Bugs
* Whitespace between classes is not deleted
* Only looks for ```pepita```, does not allow keyword customization
