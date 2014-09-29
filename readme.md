derequrie-transform
====

Quick and dirty [derequire](https://github.com/calvinmetcalf/derequire) transform, probably broken, pull requests accepted.   

Note this will not help your browserify package work with dojo or some other module loader that statically analyzes stuff badly.  It will only help in the case of a library that does something unwise like defining a local require function (\*cough\* ember \*cough\*).