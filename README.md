responsive-resize
=================

Helper to manage media queries in javascript.

### Usage:

```javascript
  ResponsiveResize.register("(max-width: 1000px)", function(){
    console.log('entering 1000');
    document.body.style.backgroundColor = 'blue'
  }, function(){
    console.log('exiting 1000');
    document.body.style.backgroundColor = 'purple'
  });
```