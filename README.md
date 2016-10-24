# PassGen - Password Generator

##What does PassGen do?

PassGen is a simple way of generating random secure passwords.  It allows you to customise the inclusion of alpha/numeric and special characters as well as the password length.

## License
ALL the code included in this project, if not otherwise stated, is released with the MIT license (see `LICENSE.txt`)

## Examples

Default password generation provides minimal help and a password

```
$ node index.js 
'passgen --help' provides more options
pass = *A`#wie%ln
```
All the options

```
$ node index.js --help
Usage: passgen [--help] [-l length] [-a] [-A] [-n] [-s] [-m]
--help : This message
-m     : Only return password (not minimal usage)
-l     : If not specified will be 10 chars

By default all characters are valid but...
-a     : Suppresses lower case alpha letters
-A     : Suppresses UPPER case alpha letters
-n     : Suppresses numeric digits
-s     : Suppresses special digits (e.g. $%*)
```

Just provide a password of default length/complexity (no noise)

```
$ node index.js -m
k}9lYbl069
```
So, you could use this within a script as follows:

```
$ export PASS=`node index.js -m`
$ echo $PASS
KcZ+#Wey{%
```





A 12 character password with no special characters

```
$ node index.js -l 12 -s
'passgen --help' provides more options
pass = 8kQbQrvKNSET
```
A 6 character pin-code

```
$ node index.js -l 6 -aAs
'passgen --help' provides more options
pass = 819617
```





