export const familia = {
  "abuelos": {
    "paternos": [
      {
        "nombre": "John Smith",
        "sexo": "Masculino",
        "lugar_nacimiento": "Leeds",
        "pais": "United Kingdom",
        "fecha_nacimiento": "1947-05-30",
        "estado_civil": "Casado",
        "foto": "./assets/img/abuelo_paterno.jpeg",
        "miniatura": "./assets/img/miniaturas/miniatura_abuelo_paterno.jpeg",
        "parentesco": "Abuelo paterno",
        "id": "abu1",
        "conyuge_id": "abu2"
      },
      {
        "nombre": "Margaret Smith",
        "sexo": "Femenino",
        "lugar_nacimiento": "Bradford",
        "pais": "United Kingdom",
        "fecha_nacimiento": "1949-09-14",
        "estado_civil": "Casada",
        "foto": "./assets/img/abuela_paterna.jpg",
        "miniatura": "./assets/img/miniaturas/miniatura_abuela_paterna.jpg",
        "parentesco": "Abuela paterna",
        "id": "abu2",
        "conyuge_id": "abu1"
      }
    ],
    "maternos": [
      {
        "nombre": "William Brown",
        "sexo": "Masculino",
        "lugar_nacimiento": "Nottingham",
        "pais": "United Kingdom",
        "fecha_nacimiento": "1946-01-27",
        "estado_civil": "Casado",
        "foto": "./assets/img/abuelo_materno.jpeg",
        "miniatura": "./assets/img/miniaturas/miniatura_abuelo_materno.jpeg",
        "parentesco": "Abuelo materno",
        "id": "abu3",
        "conyuge_id": "abu4"
      },
      {
        "nombre": "Elizabeth Brown",
        "sexo": "Femenino",
        "lugar_nacimiento": "Nottingham",
        "pais": "United Kingdom",
        "fecha_nacimiento": "1947-10-22",
        "estado_civil": "Casada",
        "foto": "./assets/img/abuela_materna.jpeg",
        "miniatura": "./assets/img/miniaturas/miniatura_abuela_materna.jpeg",
        "parentesco": "Abuela materna",
        "id": "abu4",
        "conyuge_id": "abu3"
      }
    ]
  },
  "padres": [
    {
      "nombre": "James Smith",
      "sexo": "Masculino",
      "lugar_nacimiento": "Leeds",
      "pais": "United Kingdom",
      "fecha_nacimiento": "1968-11-04",
      "estado_civil": "Casado",
      "foto": "./assets/img/padre.jpeg",
      "miniatura": "./assets/img/miniaturas/miniatura_padre.jpeg",
      "parentesco": "Padre",
      "id": "pad1",
      "conyuge_id": "pad2"
    },
    {
      "nombre": "Emily Smith",
      "sexo": "Femenino",
      "lugar_nacimiento": "Leicester",
      "pais": "País",
      "fecha_nacimiento": "1972-02-06",
      "estado_civil": "Casada",
      "foto": "./assets/img/madre.jpeg",
      "miniatura": "./assets/img/miniaturas/miniatura_madre.jpeg",
      "parentesco": "Madre",
      "id": "pad2",
      "conyuge_id": "pad1"
    }
  ],
  "hermanos": [
    {
      "nombre": "Oliver Smith",
      "sexo": "Masculino",
      "lugar_nacimiento": "Birmingham",
      "pais": "United Kingdom",
      "fecha_nacimiento": "1990-01-14",
      "estado_civil": "Casado",
      "foto": "./assets/img/hermano1.jpeg",
      "miniatura": "./assets/img/miniaturas/miniatura_hermano1.jpeg",
      "esposa": {
        "nombre": "Isabella Smith",
        "sexo": "Femenino",
        "lugar_nacimiento": "Sheffield",
        "pais": "United Kingdom",
        "fecha_nacimiento": "1992-08-05",
        "estado_civil": "Casada",
        "parentesco": "Cuñada",
        "foto": "./assets/img/cunada.jpg",
        "miniatura": "./assets/img/miniaturas/miniatura-cunada.jpg",
        "id": "esp1",
        "conyuge_id": "her1"
      },
      "hijos": [
        {
          "nombre": "Oliver Smith Jr.",
          "sexo": "Masculino",
          "lugar_nacimiento": "London",
          "pais": "United Kingdom",
          "fecha_nacimiento": "2016-10-19",
          "estado_civil": "Soltero",
          "foto": "./assets/img/sobrino1.jpg",
          "miniatura": "./assets/img/miniaturas/miniatura_sobrino1.jpg",
          "parentesco": "Sobrino",
          "id": "hij1",
          "padre_id": "her1",
          "madre_id": "esp1"
        },
        {
          "nombre": "Charlotte Smith",
          "sexo": "Femenino",
          "lugar_nacimiento": "London",
          "pais": "United Kingdom",
          "fecha_nacimiento": "2018-06-15",
          "estado_civil": "Soltera",
          "foto": "./assets/img/sobrina1.jpg",
          "miniatura": "./assets/img/miniaturas/miniatura-sobrina1.jpg",
          "parentesco": "Sobrina",
          "id": "hij2",
          "padre_id": "her1",
          "madre_id": "esp1"
        },
        {
          "nombre": "George Smith",
          "sexo": "Masculino",
          "lugar_nacimiento": "London",
          "pais": "United Kingdom",
          "fecha_nacimiento": "2019-11-21",
          "estado_civil": "Soltero",
          "foto": "./assets/img/sobrino2.jpg",
          "miniatura": "./assets/img/miniaturas/miniatura-sobrino2.jpg",
          "parentesco": "Sobrino",
          "id": "hij3",
          "padre_id": "her1",
          "madre_id": "esp1"
        }
      ],
      "parentesco": "Hermano",
      "id": "her1",
      "conyuge_id": "esp1"
    },
    {
      "nombre": "Sophie Smith",
      "sexo": "Femenino",
      "lugar_nacimiento": "Birmingham",
      "pais": "United Kingdom",
      "fecha_nacimiento": "2000-03-05",
      "estado_civil": "Soltera",
      "foto": "./assets/img/hermana1.jpg",
      "miniatura": "./assets/img/miniaturas/miniatura-hermana1.jpg",
      "parentesco": "Hermana",
      "id": "her2"
    },
    {
      "nombre": "Brooke Smith",
      "sexo": "Femenino",
      "lugar_nacimiento": "Birmingham",
      "pais": "United Kingdom",
      "fecha_nacimiento": "2002-05-16",
      "estado_civil": "Soltera",
      "foto": "./assets/img/hermana2.jpeg",
      "miniatura": "./assets/img/miniaturas/miniatura_hermana2.jpeg",
      "parentesco": "Hermana",
      "id": "her3"
    },
    {
      "nombre": "Alexander Smith",
      "sexo": "Masculino",
      "lugar_nacimiento": "Birmingham",
      "pais": "United Kingdom",
      "fecha_nacimiento": "2008-10-07",
      "estado_civil": "Soltero",
      "foto": "./assets/img/yo.jpeg",
      "miniatura": "./assets/img/miniaturas/miniatura_yo.jpeg",
      "parentesco": "Yo",
      "id": "her4"
    }
  ]
};