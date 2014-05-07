responsive-resize
=================

Helper to manage media queries in javascript.

### Usage:

```javascript
  ResponsiveResize.register({
    name: 'homepage',
    selector: "(max-width: 1000px)",
    enter: function(){
      console.log('entering 1000');
      document.body.style.backgroundColor = 'blue'
    },
    exit: function(){
      console.log('exiting 1000');
      document.body.style.backgroundColor = 'purple'
    }
  });
```
