let estudiante1 = new Estudiante("Carlos", "2DAW");
let estudiante2 = new Estudiante("Ana", "2DAW");
estudiante1.agregarNotas("Programación", 10);
estudiante1.agregarNotas("Bases de datos", 9);
estudiante1.agregarNotas("Matemáticas", 8);

estudiante2.agregarNotas("Programación", 5);
estudiante2.agregarNotas("Bases de datos", 6);
estudiante2.agregarNotas("Matemáticas", 7);
estudiante1.mostrarNotas();
estudiante2.mostrarNotas();

let escuela = new Escuela("IES Los Sauces");
escuela.matricularEstudiante(estudiante1);
escuela.matricularEstudiante(estudiante2);
escuela.lsitarEstudiantes();
escuela.mostrarMejorEstudiante();