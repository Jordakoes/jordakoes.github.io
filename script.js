var app = document.getElementById('purple');
var typewriter = new Typewriter(purple, {
    loop: false
});

typewriter.typeString('Designer')
.pauseFor(1500)
.deleteAll()
.typeString('Developer')
.pauseFor(1500)
.deleteAll()
.typeString('Prototyper')
.pauseFor(1500)
.start()