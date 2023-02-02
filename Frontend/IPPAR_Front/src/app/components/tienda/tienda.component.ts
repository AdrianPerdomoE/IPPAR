import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product'

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(
    private _router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.indice = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  indice: number;
  productos = [
    new Product(
      '1',
      'Combo Bbq Crunch Agr',
      'https://images.rappi.com/products/tmp194380945845519800895408645.png?e=webp&d=800x800&q=80',
      16900,
      '1 Sand. bbq crunch (1 filete de pollo apanado) + 1 papa pequeña + 1 gaseosa pet 400ml',
      '1'
    ),
    new Product(
      '2',
      'Wow Box Bbq Crunch Pop',
      'https://images.rappi.com/products/tmp194380955583935118294016290.png?e=webp&d=800x800&q=80',
      22900,
      '1 Sándwich bbq crunch (1 filete de pollo apanado) + 1 pop corn pequeño (trocitos de pechuga de pollo apanados) + 1 papa pequeña + 1 gaseosas pet 400ml',
      '1'
    ),
    new Product(
      '3',
      'Wow Bucket Original Agr',
      'https://images.rappi.com/products/tmp2079323217980157653152207050.png?e=webp&d=800x800&q=80',
      72700,
      '8 Presas + 1 popcorn pequeño (trocitos de pechuga de pollo apanados) + 6 arepas',
      '1'
    ),
    new Product(
      '4',
      'Combo Clásico',
      'https://images.rappi.com/products/2092523852-1620225990509.png?e=webp&d=800x800&q=80',
      56500,
      'Pollo, 4 papas, 4 arepas, papas a la francesa y bebida Coca-Cola o Premio 1.5 L a elección.',
      '2'
    ),
    new Product(
      '5',
      'Combo Familiar',
      'https://images.rappi.com/products/2092523853-1620225896358.png?e=webp&d=800x800&q=80',
      97000,
      'Pollo y ½, 6 papas, 6 arepas, papas a la francesa, ensalada de la casa y Coca-Cola Sabor Original 2.5 L.',
      '2'
    ),
    new Product(
      '6',
      'Super Combo',
      'https://images.rappi.com/products/2092523852-1620225990509.png?e=webp&d=800x800&q=80',
      110000,
      '2 Pollos, 8 papas, 8 arepas, papas a la francesa, 2 porciones de ensalada de la casa, Coca-Cola Sabor Original 2.5 L.',
      '2'
    ),
    new Product(
      '7',
      'Promo Whopper',
      'https://images.rappi.com/products/tmp156131397525120260070768349.png?e=webp&d=800x800&q=80',
      15900,
      'Cuenta con carne 113g de res a la parrilla, tomates, lechuga , pepinillos, cebollas en rodajas y cremosa mayonesa sobre un pan con ajonjolí.',
      '3'
    ),
    new Product(
      '8',
      'Combo Whopper Doble',
      'https://images.rappi.com/products/tmp1561362710649936544545690221.png?e=webp&d=800x800&q=80',
      32900,
      'Cuenta con 2 carnes de res 113g c/u a la parrilla, tomates, lechuga, pepinillos, cebolla y cremosa mayonesa sobre un pan con ajonjolí. en combo con bebida y papas medianas.',
      '3'
    ),
    new Product(
      '9',
      'Combo Irresistible King',
      'https://images.rappi.com/products/tmp156138219807154026366089699.png?e=webp&d=800x800&q=80',
      36900,
      'Disfruta de doble carne a la parrilla, queso americano, bacon, crispy onions, miel mostaza y bbq, todo en un suave pan brioche. en combo con bebida y papas medianas.',
      '3'
    ),
    new Product(
      '10',
      'Big Mac',
      'https://images.rappi.com/products/tmp1388134017018692151999766126.png?e=webp&d=800x800&q=80',
      20900,
      'Hamburguesa con dos carnes de 50gr c/u, cebolla, pepinillos, lechuga, queso cheddar, pan en el centro y nuestra salsa especial big mac',
      '4'
    ),
    new Product(
      '11',
      'Cajita Feliz Muffin Huevo',
      'https://images.rappi.com/products/tmp197096461367323320006504308.png?e=webp&d=800x800&q=80',
      19900,
      'Elige tu cajita feliz™ con egg mcmuffin, del valle moraah o mangooh de 200ml, yogo yogo melocotón y juguete',
      '4'
    ),
    new Product(
      '12',
      'Mcflurry Chocoramo',
      'https://images.rappi.com/products/tmp176920391452170646590127338.png?e=webp&d=800x800&q=80',
      9500,
      'Helado de vainilla con cubos y migas de chocoramo y salsa de arequipe.',
      '4'
    ),
    new Product(
      '13',
      'MK Acetaminofén (500 mg)',
      'https://images.rappi.com/products/b1379bf5-d92b-43f4-a638-243665041450.jpg?d=128x128&e=webp&q=70',
      8580,
      'Acetaminofén (500 mg). Caja con 16 tabletas cubiertas. Es un medicamento común para aliviar el dolor ligero o moderado de dolores de cabeza, dolores musculares, períodos menstruales, resfriados y gargantas irritadas, dolores de muelas, dolores de espalda y para reducir la fiebre. Se recomienda leer indicaciones y contraindicaciones. Si los síntomas persisten, consulte a su médico.',
      '5'
    ),
    new Product(
      '14',
      'Hidraplus Suero Oral Zinc 75 Meq Sabor a Uva',
      'https://images.rappi.com/products/fcbce046-561a-40ec-bd98-65cb783e075f.jpg?d=128x128&e=webp&q=70',
      8305,
      'Principios activos: cloruro de sodio, citrato de sodio, cloruro de Potasio, gluconato de zinc, dextrosa anhidra. Está indicado en el tratamiento de la deshidratación ocasionada por la diarrea moderada a grave y ayuda a reponer líquidos, electrolitos y zinc perdidos, permitiendo que los niños se sientan mejor rápidamente. Leer indicaciones y contraindicaciones. Si los síntomas persisten, consulte a su médico.',
      '5'
    ),
    new Product(
      '15',
      'Profamilia Prueba de Embarazo',
      'https://images.rappi.com/products/512139070802_zwdcewbcjysh_463419012381_xhzhagmtymaj_4957_1.jpeg?d=128x128&e=webp&q=70',
      8715,
      'Prueba casera de fácil uso. Permite detectar en la orina una hormona que el cuerpo produce durante el embarazo y arroja resultados precisos en un máximo de tres minutos. Leer indicaciones y contraindicaciones.',
      '5'
    ),
    new Product(
      '16',
      'Today Condones Lubricados',
      'https://images.rappi.com/products/203d3cce-2b93-4025-a8df-9dbdd42cddad.jpg?d=128x128&e=webp&q=70',
      21400,
      'Today Condones Lubricado, Especialmente lubricado para recrear una gran sensación natural, Máxima calidad comprobada, seguridad, sensibilidad y control de calidad electrónico X 6 UND',
      '6'
    ),
    new Product(
      '17',
      'iPhone 11 128 Gb Blanco',
      'https://images.rappi.com/products/1645133018161_1645133002507.jpg?d=128x128&e=webp&q=70',
      2690325,
      'Referencia: MHDJ3LZ/A Cámara Principal: Sistema de dos cámaras de 12 MP: ultra gran angular y gran angular Sistema Operativo: iOS Memoria del Sistema Ram: No aplica Conectividad: Bluetooth,Wifi',
      '7'
    ),
    new Product(
      '18',
      'Oster Plancha De Vapor Con Recubrimiento Anti-Adherente Gcstbs6001',
      'https://images.rappi.com/products/ff468e45-96b6-4075-af8b-3c1f91027556.png?d=128x128&e=webp&q=70',
      106900,
      '• Menos esfuerzo, mayor desempeño y excelente funcionalidad es como mejor podemos describir esta plancha • Suela antiadherente con diseño superior que ofrece 30% mayor cobertura*',
      '7'
    ),
    new Product(
      '19',
      'Imusa Cuchillo Santoku 13 Cm Talent Master 5861030375',
      'https://images.rappi.com/products/c4afa8c5-8359-45d0-a199-728b855bdb40.jpg?d=128x128&e=webp&q=70',
      48990,
      'Acero Inoxidable de Alta Calidad Con Mayor Dureza y Resistencia al Desgaste. Gracias al Tipo de Acero en el Que Están Elaborados. Estos Cuchillos Son Más Resistentes a la Corrosión.',
      '7'
    ),
    new Product(
      '20',
      'Hasbro Juguete Cara de Papa Clásico',
      'https://images.rappi.com/products/61b873f0-39f1-4206-8aee-cab35258183c.jpg?d=128x128&e=webp&q=70',
      79990,
      '¡Te damos la bienvenida al maravilloso y extravagante mundo de los juguetes de Toy Story! Los niños pueden crear toda clase de divertidos looks, y sentirse libres para reír de sus graciosas creaciones.',
      '7'
    ),
    new Product(
      '21',
      'Esika Perfume Hombre Magnat Select',
      'https://images.rappi.com/products/1638284910312_1638284896096.jpg?d=128x128&&q=70?d=1440xundefined&e=webp',
      92900,
      'Perfume masculino, creado con modernas notas de jengibre de Madagascar y maderas ambaradas. Inspirado en el hombre de éxito que sabe elegir y vive intensamente.',
      '8'
    ),
    new Product(
      '22',
      'Esika Locion Mini Chics Kelly Tech',
      'https://images.rappi.com/products/1645058902434_1645058892816.png?d=128x128&&q=70?d=1440xundefined&e=webp',
      35700,
      'Un aroma especialmente hecha para chicas auténticas con aspiraciones y sueños. Su dulce aroma encantará a donde vaya.',
      '8'
    ),
  ];

  goHome() {
    this._router.navigate(['/home'])
  }

  filtrarProductos(indice: number) {
    return this.productos.filter(producto => producto.owner == indice.toString())
  }
}
