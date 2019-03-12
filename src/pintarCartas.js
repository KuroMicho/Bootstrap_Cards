let datos = JSON.parse(localStorage.getItem('datos')) || []
pintarTabla();

document.addEventListener('submit', (e) => {

    var
        idPeli = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
        Titulo = ['Iron Man 3', 'Los Juegos del Hambre', 'Una Verdad Inquietante', 'El regreso de Mary Poppins', 'Spider Man: Homecoming', 'El Angel', 'Las dos Reinas', '¿No es romantico?', 'Maquinas Mortales', 'Animales Fantasticos', 'La Favorita', 'Cazadora de gigantes', 'Cadaver', 'Familia al instante', 'El favorito', 'Wifi Ralph', 'Robin Hood', 'Overlord', 'Indivisible', 'Bohemian Rhapsody'],
        Descripcion = ['Tony Stark se enfrentará a El Mandarín, un enemigo con un poder aparentemente ilimitado. Cuando su enemigo ha destruido su universo personal, se lanza a la búsqueda del responsable. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto.', 'Todos los años el Capitolio de la nación de Panem obliga a cada uno de sus doce distritos a enviar dos adolescentes a competir en los Juegos del Hambre. Un castigo por una rebelión que tuvo lugar en el pasado y una táctica de intimidación del gobierno, un acontecimiento en el que los tributos deben luchar entre sí hasta que sólo quede un superviviente.', 'Un hombre secuestra a la dueña de una florería y la mantiene cautiva en un pequeño cuarto insonorizado para intentar extraerle un oscuro secreto de su pasado.', 'Años después de su primera visita, la niñera mágica regresa para ayudar a los hermanos Banks y a los hijos de Michael a superar un momento difícil en sus vidas.', 'Peter Parker trata de equilibrar su vida como un estudiante regular de secundaria con su alter ego, el superhéroe Spider-Man. Debe enfrentar a una nueva amenaza que ronda los cielos de la ciudad de Nueva York.', 'Carlitos es un adolescente de 17 años a quien nadie se puede resistir, pero su cara angelical oculta una oscura faceta de robos, mentiras y asesinatos. Inspirada en hechos reales.', 'Mary Stuart, reina de Francia a los 16 y viuda a los 18, regresa a Escocia para reclamar su derecho al trono, el cual está en el poder de su prima Elizabeth I, reina de Inglaterra.', 'Una joven arquitecta desencantada con el amor se encuentra misteriosamente atrapada dentro de una comedia romántica luego de sufrir un accidente.', 'En un mundo post apocalíptico donde las ciudades se desplazan sobre ruedas y se consumen entre sí para sobrevivir, dos personas se encuentran en Londres para detener una amenaza.', 'Las aventuras del escritor Newt Scamander en la secreta comunidad de brujería y hechicería de Nueva York, setenta años antes de que Harry Potter leyera su libro en la escuela.', 'A principios del siglo 18 en Inglaterra, la frágil reina Anne ocupa el trono y su amiga cercana, Lady Sarah, gobierna el país en su lugar. Cuando llega una nueva sirvienta, Abigail, su encanto llama la atención de Sarah.', 'Barbara Thorson, de 12 años, escapa de la complicada realidad hacia un mundo fantástico y mágico, en el cual enfrenta gigantes y monstruos. Basada en el comic del mismo nombre.', 'Cuando una policía que acaba de salir de rehabilitación toma el turno nocturno en la morgue del hospital, se enfrenta con una serie de extraños y violentos eventos causados por una entidad malvada en uno de los cuerpos.', 'Pete y Ellie Wagner, sintiendo un vacío en su matrimonio, visitan un orfanato. Una vez ahí deciden adoptar a una adolescente y sus dos hermanos menores.', 'La campaña presidencial del senador de Estados Unidos, Gary Hart, en 1988, queda fuera de control cuando es encontrado teniendo una escandalosa aventura amorosa.', 'Seis años después de salvar el arcade de la venganza de Turbo, Ralph y Vanellope, que ahora son amigos, descubren un router wifi en su consola, el cual los lleva a una nueva aventura.', 'El cruzado endurecido en batalla Robin Hood y su comandante moro organizan una audaz rebelión en contra de la corrupción de la corona inglesa.', 'En la víspera del día D, el 5 de junio de 1944, un pequeño grupo de soldados estadounidenses se encuentra con algo aterrador cuando intentan completar una misión crucial tras líneas enemigas.', 'La extraordinaria historia del capellán del ejército Darren Turner y su esposa Heather. Cuando la guerra deja marcas en sus corazones, enfrentan una batalla más: salvar su relación.', 'La historia de la legendaria banda de rock Queen y de su cantante Freddie Mercury, llevando hasta su famosa presentación en el concierto Live Aid de 1985.']

    var dato = {
        idPeli: idPeli,
        Titulo: Titulo,
        Descripcion: Descripcion,
    }

    datos.push(dato)
    localStorage.setItem('datos', JSON.stringify(datos))

    pintarTabla();
})

function pintarTabla() {


    var
        idPeli = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
        Titulo = ['Iron Man 3', 'Los Juegos del Hambre', 'Una Verdad Inquietante', 'El regreso de Mary Poppins', 'Spider Man: Homecoming', 'El Angel', 'Las dos Reinas', '¿No es romantico?', 'Maquinas Mortales', 'Animales Fantasticos', 'La Favorita', 'Cazadora de gigantes', 'Cadaver', 'Familia al instante', 'El favorito', 'Wifi Ralph', 'Robin Hood', 'Overlord', 'Indivisible', 'Bohemian Rhapsody'],
        Descripcion = ['Tony Stark se enfrentará a El Mandarín, un enemigo con un poder aparentemente ilimitado. Cuando su enemigo ha destruido su universo personal, se lanza a la búsqueda del responsable. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto.', 'Todos los años el Capitolio de la nación de Panem obliga a cada uno de sus doce distritos a enviar dos adolescentes a competir en los Juegos del Hambre. Un castigo por una rebelión que tuvo lugar en el pasado y una táctica de intimidación del gobierno, un acontecimiento en el que los tributos deben luchar entre sí hasta que sólo quede un superviviente.', 'Un hombre secuestra a la dueña de una florería y la mantiene cautiva en un pequeño cuarto insonorizado para intentar extraerle un oscuro secreto de su pasado.', 'Años después de su primera visita, la niñera mágica regresa para ayudar a los hermanos Banks y a los hijos de Michael a superar un momento difícil en sus vidas.', 'Peter Parker trata de equilibrar su vida como un estudiante regular de secundaria con su alter ego, el superhéroe Spider-Man. Debe enfrentar a una nueva amenaza que ronda los cielos de la ciudad de Nueva York.', 'Carlitos es un adolescente de 17 años a quien nadie se puede resistir, pero su cara angelical oculta una oscura faceta de robos, mentiras y asesinatos. Inspirada en hechos reales.', 'Mary Stuart, reina de Francia a los 16 y viuda a los 18, regresa a Escocia para reclamar su derecho al trono, el cual está en el poder de su prima Elizabeth I, reina de Inglaterra.', 'Una joven arquitecta desencantada con el amor se encuentra misteriosamente atrapada dentro de una comedia romántica luego de sufrir un accidente.', 'En un mundo post apocalíptico donde las ciudades se desplazan sobre ruedas y se consumen entre sí para sobrevivir, dos personas se encuentran en Londres para detener una amenaza.', 'Las aventuras del escritor Newt Scamander en la secreta comunidad de brujería y hechicería de Nueva York, setenta años antes de que Harry Potter leyera su libro en la escuela.', 'A principios del siglo 18 en Inglaterra, la frágil reina Anne ocupa el trono y su amiga cercana, Lady Sarah, gobierna el país en su lugar. Cuando llega una nueva sirvienta, Abigail, su encanto llama la atención de Sarah.', 'Barbara Thorson, de 12 años, escapa de la complicada realidad hacia un mundo fantástico y mágico, en el cual enfrenta gigantes y monstruos. Basada en el comic del mismo nombre.', 'Cuando una policía que acaba de salir de rehabilitación toma el turno nocturno en la morgue del hospital, se enfrenta con una serie de extraños y violentos eventos causados por una entidad malvada en uno de los cuerpos.', 'Pete y Ellie Wagner, sintiendo un vacío en su matrimonio, visitan un orfanato. Una vez ahí deciden adoptar a una adolescente y sus dos hermanos menores.', 'La campaña presidencial del senador de Estados Unidos, Gary Hart, en 1988, queda fuera de control cuando es encontrado teniendo una escandalosa aventura amorosa.', 'Seis años después de salvar el arcade de la venganza de Turbo, Ralph y Vanellope, que ahora son amigos, descubren un router wifi en su consola, el cual los lleva a una nueva aventura.', 'El cruzado endurecido en batalla Robin Hood y su comandante moro organizan una audaz rebelión en contra de la corrupción de la corona inglesa.', 'En la víspera del día D, el 5 de junio de 1944, un pequeño grupo de soldados estadounidenses se encuentra con algo aterrador cuando intentan completar una misión crucial tras líneas enemigas.', 'La extraordinaria historia del capellán del ejército Darren Turner y su esposa Heather. Cuando la guerra deja marcas en sus corazones, enfrentan una batalla más: salvar su relación.', 'La historia de la legendaria banda de rock Queen y de su cantante Freddie Mercury, llevando hasta su famosa presentación en el concierto Live Aid de 1985.']



    var userhtml = document.getElementById('cardPeliculas')
    userhtml.innerHTML = '';

    for (var i = 0; i < datos.length; i++) {
        userhtml.innerHTML +=



            ` 

    <div class="col s3" style="width: 220; height: 320;">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src=${idPeli[i]} width="220" height="320">
                    </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Info...<i class="material-icons right">more_vert</i></span>
                        
                        </div>
                            <div class="card-reveal grey darken-4" >
                            <span class="card-title white-text text-darken-1">${Titulo[i]}<i class="material-icons right">close</i></span>
                            <span class="grey-text text-lighten-1"><p>${Descripcion[i]}</p></span>
                            <a href="https://www.cinecalidad.to/" class="btn btn-primary">Ver...</a>
                            </div>
            </div>
    </div>
        
    
    `
    }



}



