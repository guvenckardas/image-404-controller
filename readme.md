#Overview

Image 404 controller Jquery Plugin


## How to use
Before use it,  be sure jquery and gImageDetector have loaded.

```sh
$(document).on('ready',function(){
    $.gImageDetector({
       defaultImagePath:'Default-image-path'
    });
});
```

### Async image download
You can use code below, lazy load ajax action.(!if necessary)

```sh
$GG(document).ajaxComplete(function() {
    $.gImageDetector({
       defaultImagePath:'Default-image-path'
    });
});
```