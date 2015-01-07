var s = slidr.create('slidr-home', {
    breadcrumbs: false,
    controls: 'none',
    fade: true,
    keyboard: true,
    overflow: true,
    touch: true,
    timing: { 'linear': '0.5s ease-in'},
		transition: 'linear'
            
     	
})
s.add('h', ['one', 'two', 'three', 'four', 'five', 'six', 'one'], 'linear');
s.auto(7000, 'right');