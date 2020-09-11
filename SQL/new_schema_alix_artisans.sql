-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: new_schema_alix
-- ------------------------------------------------------
-- Server version	8.0.21

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

--
-- Table structure for table `artisans`
--

DROP TABLE IF EXISTS `artisans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artisans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `presentation` longtext,
  `thumbnail` varchar(45) DEFAULT NULL,
  `photo` varchar(45) DEFAULT NULL,
  `origine` varchar(45) DEFAULT NULL,
  `firstPage` tinyint DEFAULT NULL,
  `artisanDuMois` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artisans`
--

LOCK TABLES `artisans` WRITE;
/*!40000 ALTER TABLE `artisans` DISABLE KEYS */;
INSERT INTO `artisans` VALUES (1,'Emil Demille','jhf zuezal kezkehzakl eake a','','https://i.imgur.com/TAEx94w.png','Paris',1,1),(7,'Nana','chien','thumbnail','photo','origine',0,0),(10,'jgjg','chien','thumbnail','photo','origine',0,0),(15,'Paloma','djgfqjs','','photo','origine',1,1),(18,'Lynda',' lhrfheh eeisurykezurh qhrzkj hrzkq hzkhha','','',NULL,1,1),(20,'lalapooooo','','','',NULL,1,0),(22,'lola','kjhgf','','',NULL,1,0),(23,'nicolas','kjhgfdjhgfd\nuytrez\nkjhgfd','','',NULL,1,0),(24,'Soraya','oiuyhgtfd\njhgfds\niuytfrdes','','',NULL,1,0),(25,'Céline','kjhbgvfcdxs\niuytrez\njnhbgvfcdx','','',NULL,0,0),(29,'Silvia en pleine forme','kjhgfds','','',NULL,0,0),(30,'','','','undefined',NULL,0,0),(31,'putain','zl:akrnfz,az:;ela:,eo ljl','','undefined',NULL,1,0),(32,'bordel','amefherljuihkl\" om\"ijaez ekéjez\" klje','','undefined',NULL,1,0),(33,'pourri','oehrej eoi jrijeli jezlrezm','','undefined',NULL,1,0),(34,'pâté',';zeuhf:ejel=kjrklrcl ljeljr lkrlz:e','','undefined',NULL,1,0),(35,'casino de ta mère','zeiykzajokej zojzoiejoizej zaile','','undefined',NULL,1,0),(36,'Testttttt','skrekrjl sk','','undefined',NULL,1,0),(37,'lkjq','',NULL,NULL,NULL,0,0),(38,'sfkj','',NULL,'nana copie.jpg',NULL,0,0);
/*!40000 ALTER TABLE `artisans` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-06 17:40:20
