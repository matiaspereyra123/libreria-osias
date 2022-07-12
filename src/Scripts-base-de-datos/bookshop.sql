-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: bookshop
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP DATABASE IF EXISTS bookshop;
CREATE DATABASE bookshop;
USE bookshop;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `genre_id` int NOT NULL,
  `publisher_id` int NOT NULL,
  `title` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb3 COLLATE utf8_general_ci,
  `publication_date` int DEFAULT NULL,
  `price` int NOT NULL,
  `isbn` bigint NOT NULL,
  `author` varchar(150) COLLATE utf8_bin NOT NULL,
  `second_author` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `pages` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `image` longtext CHARACTER SET utf8mb3 COLLATE utf8_general_ci,
  `translator` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `illustrator` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `language` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  `active` int DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn_UNIQUE` (`isbn`),
  KEY `fk_book_genre1_idx` (`genre_id`),
  KEY `fk_book_publisher1_idx` (`publisher_id`),
  CONSTRAINT `fk_book_genre1` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  CONSTRAINT `fk_book_publisher1` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,1,1,'El cielo sobre Berlín','El cielo sobre Berlín es la obra maestra de Wim Wenders y uno de los éxitos internacionales más importantes del cine alemán. Monólogos de fuerte lirismo conforman el lenguaje poético con el que se profundizan dilemas humanos como la existencia, la finitud, la soledad o el amor.\n Sebastiano y Lorenzo Toma actualizan la vigencia de esta hermosa obra, reescenificándola en el Berlín del presente, en donde un ángel elegirá perder su armadura y la fijeza de sus alas, para que sean las alas del deseo («Crecerán alas nuevas en el lugar de las viejas») las que guíen sus pasos hacia el destino del amor. Ese amor que, en palabras de Joseph Roth, «no nos ciega, como dice el absurdo refrán, sino que, al contrario, nos abre los ojos», y que en el lenguaje fílmico de Wenders abre la mirada del ángel a la fiesta de los colores en el amarillo de un cartel, el azul del cielo, el rojo de un vestido.',2016,5600,9788494494291,'Sebastiano Toma','Lorenzo Toma',192,4,'Cover-Cielo-sobre-Berlin-WEB.jpeg','Carmen Gauger',NULL,'Español',NULL,NULL,1),(2,1,2,'El piano oriental','Nominada a mejor obra en el festival de Angulema de 2016, El piano oriental es una conmovedora y divertida novela gráfica inspirada en la vida del bisabuelo de su autora, un músico aficionado que, en el Beirut de la década de los cincuenta, inventó un piano bilingüe capaz de tender puentes entre las tradiciones musicales de Oriente y Occidente. Si en El juego de las golondrinas, Abirached relataba una infancia marcada por la violencia, la incertidumbre y el miedo de la guerra civil, en El piano oriental se concentra en la edad adulta y, a partir de ella, plantea una reflexión sobre el pasado, la memoria y las diferencias culturales. El resultado es una extraordinaria metáfora sobre su propia vida y su identidad, constituida con elementos de dos culturas en apariencia irreconciliables.',2016,3499,9788416131242,'Zeina Abirached',NULL,192,4,'home_cover_piano.jpeg','María Otero Porta',NULL,'Español',NULL,NULL,1),(3,1,3,'Persépolis','Persépolis nos cuenta la revolución islámica iraní vista desde los ojos de una niña que asiste atónita al cambio profundo que experimentan su país y su familia, mientras ella debe aprender a llevar el velo. Intensamente personal y profundamente político, el relato autobiográfico de Marjane Satrapi examina qué significa crecer en un ambiente de guerra y represión.',2020,5300,9789873818783,'Marjane Satrapi',NULL,352,7,'home_cover_persepolis.jpeg','Carlos Mayor',NULL,'Español',NULL,NULL,1),(4,1,4,'El año de la rata','A mitad de camino entre la realidad y la más absoluta ficción, El año de la rata es una crónica gráfica y distópica a dos voces, creada durante el 2020, el año de la rata en el calendario chino.',2021,2990,9788412340037,'Mariana Enríquez',NULL,160,7,'COVER_El-ano-de-la-rata_ALTA-800x1093.jpeg',NULL,'Dr. Alderete','Español',NULL,NULL,1),(5,1,2,'Heimat','Perteneciente a la segunda generación de alemanes nacidos tras el final de la Segunda Guerra Mundial, Nora Krug creció luchando contra la profunda ambivalencia que le provocaba el pasado reciente de su país. Durante sus viajes de joven, su acento sólo suscitaba reacciones desagradables, una rabia que entendía y compartía.',2021,6580,9788416131549,'Nora Krug',NULL,288,7,'home_cover_heimat.jpeg','Esther Cruz Santaella',NULL,'Español',NULL,NULL,1),(6,1,5,'Un paseo por la vida de Simone de Beauvoir','¿Quién fue Simone de Beauvoir? Esa es una de las preguntas de este libro, pero no es la más importante. Estas páginas no contienen una biografía al uso. Aquí, Beauvoir no es solo una de las personalidades más célebres del siglo XX, sino una mujer cuya experiencia sigue teniendo ecos en la vida de las mujeres de hoy. Esa es, precisamente, la novedad de este libro: los pasos de Beauvoir no se quedan en el pasado, aislados en su mayo del 68 o en su romance con Jean-Paul Sartre, sino que se desplazan hasta la manera de caminar y de ver propias de las mujeres jóvenes del siglo XXI.',2018,3590,9788426405371,'Carmen G. de la Cueva',NULL,192,6,'cover_simon.jpg','Mª del Mar Hernández Fernández','Malota','Español',NULL,NULL,1),(7,2,6,'El rey Arturo y sus caballeros de la Tabla Redonda','En esta magistral versión, ilustrada con los dibujos originales de Aubrey Beardsley de la edición de 1893, Roger Lancelyn Green recrea el mundo mágico en el que transcurre una de las leyendas más grandes de todos los tiempos, y nos muestra las andanzas, triunfos y desventuras de nobles y valientes caballeros, magos, dragones... Un legado que nos recuerda que algunas historias no deben olvidarse jamás.',2018,3590,9788417454654,'Roger Lancelyn Green',NULL,280,6,'9788417454654_L38_04_l.png','José Sánchez Compañy','Aubrey Beardsley','Español',NULL,NULL,1),(8,2,1,'La condesa condesa sangrienta','Con motivo de los cincuenta años de la muerte de Alejandra Pizarnik, llega una edición en tapa dura entelada de La condesa sangrienta, una de las composiciones clave en la obra de esta poeta considerada una de las voces más influyentes del siglo XX. A lo largo de doce breves textos cargados de lirismo que conjugan ensayo y narración, se despliega el particular universo de la autora para finalmente construir un retrato perturbador del sadismo y la locura.',2012,3450,9788496509726,'Alejandra Pizarnik',NULL,60,6,'home_condesa-sangrienta.jpg',NULL,'Santiago Caruso','Español',NULL,NULL,1),(9,2,1,'La metamorfosis','Pieza clave dentro de su producción literaria, La metamorfosis es una vasta y vívida pesadilla donde gravita una intensidad ejemplar. Las ilustraciones del gran artista argentino Luis Scafati recrean admirablemente los peculiares ambientes y tortuosos personajes de este relato, invitando al lector a una aventura memorable.',2009,2340,9788496509764,'Franz Kafka',NULL,68,6,'metam-espanol.jpeg','César Aira','Luis Scafati','Español',NULL,NULL,1),(10,2,1,'Romeo y Julieta','Romeo y Julieta es una historia sobre la imposibilidad del amor, pero también sobre su posibilidad aun y los constructos sociales. En esta época en la que nos replanteamos nuestra idea del amor romántico, es importante volver a las grandes obras que nos ayudaron a construir esas nociones hoy obsoletas, para darles nueva vida y significado. Esta edición, que cuenta con ilustraciones del artista Svetlin Vassilev y un lúcido prólogo a cargo de la escritora colombiana Carolina Sanín, propone una relectura de la clásica tragedia de Shakespeare sobre dos adolescentes enamorados, cuyas familias están enfrentadas.',2022,2340,9788412340099,'William Shakespeare',NULL,184,8,'Home cover Romeo-y-Julieta.jpeg','Ángel-Luis Pujante','Svetlin Vassilev','Español',NULL,NULL,1),(11,2,1,'El hombre invisible','Publicada originalmente en 1897 por entregas, El Hombre Invisible relata las contradicciones de un joven y brillante científico que se desprende de toda ética en pro de su sed de dominio y lucro personal. Este clásico atemporal del escritor británico H. G. Wells, conocido como el padre de la ciencia ficción, nos pide reflexionar acerca de los límites éticos de la ciencia en esta época de veloces avances médicos y tecnológicos. Esta obra de absoluta vigencia se vuelve más aterradora que nunca a través de las ilustraciones de Scafati, uno de los artistas plásticos argentinos más importantes e ilustrador insignia del catálogo de Libros del Zorro Rojo. Las estampas, en riguroso blanco y negro, realizadas con una técnica que recuerda al grabado xilográfico, recrean admirablemente la aciaga atmósfera de una sociedad trastornada por la conducta de un individuo que actúa con total impunidad cuando no es visto.',2022,4509,9788412078855,'H. G. Wells',NULL,216,6,'Cover_El-hombre-invisible.jpeg','Marcial Souto','Luis Scafati','Español',NULL,NULL,1),(12,2,1,'Odas a la comida y otros placeres elementales','Esta edición reúne una veintena de odas en las que el Premio Nobel Pablo Neruda homenajea a la comida y otros placeres elementales vinculados con el arte y el acto de comer. El poeta chileno hace poesía de la vida cotidiana y celebra la naturaleza y sus múltiples virtudes, a la vez que nos permite indagar en su identidad latinoamericana y repensar la relación histórica entre España y América Latina. Las estampas de Javier Zabala, Premio Nacional de Ilustración y artista de recurrente presencia en el catálogo de Libros del Zorro Rojo, acompañan este original poemario.',2022,3080,9788412340068,'Pablo Neruda',NULL,96,6,'Home-Cover_Odas-a-la-comida.jpeg',NULL,'Javier Zabala','Español',NULL,NULL,1),(13,2,1,'Fahrenheit 451','Las expresivas ilustraciones del dibujante y caricaturista inglés Ralph Steadman retratan con turbadora potencia el universo distópico de Bradury y convierten este volumen en una auténtica obra de arte. A través de sus ya célebres salpiconazos de tinta negra y roja, uno de los artistas de referencia de Libros del Zorro Rojo recrea con auténtica destreza el fuego abrasador y una atmósfera opresiva, casi apocalíptica.',2020,3100,9789874429186,'Ray Bradbury',NULL,192,7,'Home_Cover_Fahrenheit.jpeg','Marcial Souto','Ralph Steadman','Español',NULL,NULL,1),(14,3,1,'Discurso del oso','Un oso que deambula por las cañerías de un edificio va descubriendo la extra.a y solitaria vida de los seres humanos. El escritor argentino reúne en esta obra una sucesión de situaciones imposibles, retazos de su humor surrealista, con los que expresa su rebeldía contra los objetos y las personas que forman parte de nuestra cotidianeidad. El oso imaginado por Urberuaga es un oso rojo, intenso, recortado sobre un brillante fondo amarillo, y que se afirma despreocupado y juguetón en su naturaleza imposible, onírica. Un personaje entrañable que habría deleitado al propio Cortázar.',2008,2740,9788412078824,'Julio Cortázar',NULL,24,8,'Cover_Discurso-del-Oso.jpeg',NULL,'Emilio Urberuaga','Español',NULL,NULL,1),(15,3,7,'Gotita','La pasión de las autoras por el arte como elemento pedagógico se manifiesta en este álbum lúdico y poético, ideal para tener un primer acercamiento al ciclo del agua. Gotita va de viaje: de su nube se desprende y del cielo cae lentamente. El viento la hace bailar, girar y caracolear. Un rayo de sol asoma ¡y en arco iris se transforma! En este álbum acordeón, a través de un texto imaginativo y rítmico, el niño sigue el viaje de una gotita de agua desde su nube hasta el mar y de vuelta a la nube.',2018,4990,9788426145345,'Stéphanie Joire',NULL,26,6,'gotita.jpeg','Teresa Farran i Vert','Laura Fanelli','Español',NULL,NULL,1),(16,3,7,'Espera, Miyuki','Es el primer día de primavera y Miyuki quiere ver cómo florece el jardín de su abuelo. Pero una de las flores tarda demasiado en abrirse, según Miyuki… Entonces decide salir a buscar el agua más pura para ayudarla a florecer. Miyuki pasa el día corriendo impaciente, en una búsqueda desesperada, y se pierde el espectáculo de la primavera. Un hermoso cuento para aprender el arte de la paciencia y de la contemplación. Un texto poético y sutil acompañado por unas maravillosas ilustraciones con el elegante trazo de Seng Soun Ratavanah',2016,3340,9788426143969,'Roxane Marie Galliez',NULL,28,8,'espera-miyuki.jpeg','Pau Joan Hernàndez','Seng Soun Ratavanah','Español',NULL,NULL,1),(17,3,1,'Ríos del mundo','Este libro presenta 19 ríos legendarios de los cinco continentes y nos muestra la diversidad de sus paisajes y los lugares emblemáticos que baña el curso de sus aguas. Una travesía para pequeños exploradores del siglo XXI, que se sumergirán en el pasado y el presente de los grandes ríos del mundo.',2021,4500,9788412314335,'Volker Mehnert',NULL,40,6,'COVER_Rios-del-mundo.jpeg','Moka Seco Reeg','Martin Haake','Español',NULL,NULL,1),(18,3,1,'Serafina. El cumpleaños','En este bello álbum de cartón de gran tamaño el lector tendrá el placer de buscar y redescubrir miles de detalles, personajes encantadores y situaciones sorprendentes. También podrá seguir los diferentes eventos de la jornada de Serafina y su pandilla: desde que se despiertan, desayunan y disfrutan de la velada hasta que despiden a los invitados al atardecer. Albertine, ganadora del Premio Hans Christian Andersen 2020, apuesta por primera vez por la pintura digital y enriquece su paleta con nuevos matices, desplegando un universo lleno de colores vivos y una imaginación explosiva. Un libro que estimula la observación y el diálogo con los más pequeños mientras participan en la mejor fiesta que se haya visto jamás.',2021,4700,9788412270570,'Albertine',NULL,16,7,'COVER_Serafina.jpeg','Andrea Bescós','Albertine','Español',NULL,NULL,1),(19,3,1,'El vendedor de felicidad','La felicidad no admite descuentos. Es bueno tener siempre un frasco de reserva, aunque sea pequeño. El vendedor de felicidad llama a la puerta de los incrédulos, de los artistas, de las abuelitas. ¿Quién puede resistirse?',2020,3200,9788412079029,'Davide Calì',NULL,32,8,'COVER_El-vendedor-de-felicidad.jpeg','Isabel Borrego','Marco Somà','Español',NULL,NULL,1),(21,2,1,'Hamlet: Príncipe de Dinamarca','Hamlet es uno de los libros más leídos y representados de la historia de Occidente. Considerado La Gioconda de la literatura, es una obra cautivadora, que traspasa límites: los juegos de palabras de Hamlet suponen trazos de comedia en una atmósfera inherentemente trágica, donde la frontera entre representación dramática y vida real queda difuminada; y la consumación de la venganza finalmente se vehiculiza en una escena en que, como exhibición lúdica, se actúa un combate. Las palabras de Hamlet «Dormir, morir, tal vez soñar» dan cuenta de este fino celaje, inherente a la obra, en el que queda incluido el propio Shakespeare, cuyo padre había fallecido recientemente. Esta edición recupera el exquisito trabajo de ilustración de John Austen de 1922, que orla la pieza más extensa del dramaturgo inglés con estampas de un fuerte carácter esteticista. La traducción de Ángel-Luis Pujante —referencia indiscutida del teatro Shakespeariano— rubrica una distinguida labor sobre uno de los clásicos de la literatura por excelencia.\r\n\r\n',2018,3999,9788494773440,'William Shakespeare','',208,4,'1657650322403.jpeg','Ángel-Luis Pujante','John Austen','Español',NULL,NULL,1),(22,4,8,'Partir: Sur les chemins de Compostelle','',2022,3500,9782203221918,'Lili Sohn','',336,3,'1657650447592.jpeg','','','Francés',NULL,NULL,1);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Historieta & Novela gráfica'),(2,'Literatura ilustrada'),(3,'Infantiles'),(4,'Viajes'),(5,'Arte'),(6,'Fotografía');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderscarts`
--

DROP TABLE IF EXISTS `orderscarts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderscarts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_number` int NOT NULL,
  `total` int NOT NULL,
  `confirmed` int NOT NULL,
  `create_time` date DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderscarts`
--

LOCK TABLES `orderscarts` WRITE;
/*!40000 ALTER TABLE `orderscarts` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderscarts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordersCartsBooks`
--

DROP TABLE IF EXISTS `ordersCartsBooks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordersCartsBooks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_has_book_book1_idx` (`book_id`),
  KEY `fk_order_has_book_order1_idx` (`order_id`),
  CONSTRAINT `fk_order_has_book_book1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `fk_order_has_book_order1` FOREIGN KEY (`order_id`) REFERENCES `orderscarts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordersCartsBooks`
--

LOCK TABLES `ordersCartsBooks` WRITE;
/*!40000 ALTER TABLE `ordersCartsBooks` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordersCartsBooks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publishers`
--

DROP TABLE IF EXISTS `publishers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publishers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `phone_number` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publishers`
--

LOCK TABLES `publishers` WRITE;
/*!40000 ALTER TABLE `publishers` DISABLE KEYS */;
INSERT INTO `publishers` VALUES (1,'Libros del Zorro Rojo',NULL,NULL,NULL),(2,'Salamandra Graphic',NULL,NULL,NULL),(3,'Reservoir Books',NULL,NULL,NULL),(4,'Nuevo extremo',NULL,NULL,NULL),(5,'Lumen',NULL,NULL,NULL),(6,'Siruela',NULL,NULL,NULL),(7,'Juventud',NULL,NULL,NULL),(8,'Casterman','','',0);
/*!40000 ALTER TABLE `publishers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderCart_id` int DEFAULT NULL,
  `first_name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `password` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `dni` int NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `image` longtext CHARACTER SET utf8mb3 COLLATE utf8_general_ci,
  `isAdmin` int NOT NULL DEFAULT '0',
  `create_time` date DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  `active` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  KEY `fk_user_order-cart1_idx` (`orderCart_id`),
  CONSTRAINT `fk_user_order_cart` FOREIGN KEY (`orderCart_id`) REFERENCES `orderscarts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'lucas','duartes','lucas@usuario.com','$2a$10$Q98RXCYbL5R/Z7J/ca7YK.GflkX7SvCY4KOvHajXLqcNPMcLHDZKu',23456689,'nodemon','1990-04-03','1657056508868.jpeg',0,NULL,NULL,0),(2,NULL,'Maria','Dumas','maria@gmail.com','$2a$10$CLMxduuyxLGJPNhYeThG5O5is3uBvJIUXwRblrB/2RfmESlO.oBlS',34567890,'nodemon','2022-06-05','1657057432983.jpeg',0,NULL,NULL,0),(5,NULL,'María','Dumas','maria@maria.com','$2a$10$AsOUWZs9m93ohTAy2AAK2eYUNcyXvQSBHX45elTo96LFUrTwPsSCm',4567,NULL,NULL,'avatar.jpg',1,NULL,NULL,1),(6,NULL,'Lucas','Duartes','lucas@lucas.com','$2a$10$b0YCV2E1Df1ngXF8oscJ7uUhN8O0aSd7MFiO1BqFZxJwW5k8zP1E2',348976509,NULL,NULL,'avatar.jpg',0,NULL,NULL,1),(7,NULL,'Cristina','Balestrini','cristina@cristina.com','$2a$10$S5JDcYHX6HKjTvXfgt2Ume9OiFVcL09wXcD5EnA9Qs6aPhyNHhKkm',456789234,NULL,NULL,'avatar.jpg',0,NULL,NULL,1),(9,NULL,'Lali','Espósito','lali@lali.com','$2a$10$5NIU.5JLHi6L0dJLks.SBOErsXq9sA7bDHIHN979wCQNOnk2fmTqy',34897650,NULL,NULL,'avatar.jpg',0,NULL,NULL,1),(10,NULL,'Antonella','Rocuzzo','antonella@antonella.com','$2a$10$HhkaAk6gJUfOv.mmuLX5Ae8QDBAMC25FeD0c6B5kyKmc8pzEZ27Wq',4567123,NULL,NULL,'avatar.jpg',0,NULL,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-12 16:59:58
