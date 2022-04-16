CREATE DATABASE  IF NOT EXISTS `medcare` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `medcare`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: medcare
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `Aid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Contact` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Lid` int DEFAULT NULL,
  PRIMARY KEY (`Aid`),
  KEY `fk_aid_idx` (`Lid`),
  CONSTRAINT `fk_aid` FOREIGN KEY (`Lid`) REFERENCES `login` (`Lid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Suresh Raina','673456','Mumbai',1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `Aid` int NOT NULL AUTO_INCREMENT,
  `Uid` int DEFAULT NULL,
  `Did` int DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Time` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Aid`),
  KEY `fk_aid1_idx` (`Uid`),
  KEY `fk_aid2_idx` (`Did`),
  CONSTRAINT `fk_aid1` FOREIGN KEY (`Uid`) REFERENCES `users` (`Uid`),
  CONSTRAINT `fk_aid2` FOREIGN KEY (`Did`) REFERENCES `doctors` (`Drid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,1,1,'2022-03-26','11:00 AM','Approved'),(2,6,2,'2022-03-26','06:00 PM','Approved'),(3,6,1,'2022-04-05','05:00 PM','Approved'),(4,7,1,'2022-04-05','11:00 AM','Approved'),(5,8,2,'2022-04-02','09:00 AM','Approved'),(9,6,3,'2022-04-05','09:00 AM','Declined'),(10,6,3,'2022-04-04','06:00 PM','Requested'),(11,6,2,'2022-04-04','06:00 PM','Requested'),(12,8,1,'2022-04-05','10:00 AM','Approved'),(13,6,1,'2022-04-05','09:00 AM','Approved'),(14,6,1,'2022-04-05','06:00 PM','Approved'),(15,12,2,'2022-04-15','06:00 PM','Requested'),(16,13,1,'2022-04-16','05:00 PM','Approved'),(17,6,2,'2022-04-16','06:00 PM','Requested'),(18,8,1,'2022-04-16','05:00 PM','Requested'),(19,6,1,'2022-04-17','11:00 AM','Requested');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `Bid` int NOT NULL AUTO_INCREMENT,
  `Did` int DEFAULT NULL,
  `Content` longtext,
  `Date` date DEFAULT NULL,
  PRIMARY KEY (`Bid`),
  KEY `fk_bid_idx` (`Did`),
  CONSTRAINT `fk_bid` FOREIGN KEY (`Did`) REFERENCES `doctors` (`Drid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,1,'Now a days corona is spraiding very fastly. so plz take a precautions stay healthy ad fit. wash your hands daily, mailtain social distancing, do daily excersice','2022-03-25'),(2,1,'Duchenne Muscular Dystrophy is a degenerative condition caused by a mutation on the DMD gene, which is responsible for the production of dystrophin, a protein that helps muscles recover. Duchenne is a complicated disorder leading to various myths or misconceptions about those living with it. Below are often 3 myths people may have about Duchenne, and some further information about each one in addition to some further information about each statement.','2022-03-26'),(3,1,'ECG and ECHO are medical tests that are non-invasive and painless in nature. These two tests serve the purpose of evaluating the present functioning of the heart. One of the unique features associated with these tests is that patients do not need any specific preparation before opting for both of these tests. Also, there are no recorded risks for patients while taking these tests for further treatment.','2022-03-31'),(4,2,'Knee osteoarthritis (OA) causes chronic pain, reduces physical function, and diminishes quality of life.  Obesity, prior injury, and increasing age are among the risk factors for knee OA, which is more common in women. Typical treatments for knee OA include total joint replacement and exercise.','2022-04-03'),(6,5,'Whether you are trying to lose weight, control your blood pressure or lower your cholesterol, you may find your diet has become bland and uninteresting. There is some good news that will liven up your diet without risk to your weight, blood pressure, or cholesterol.','2022-04-03');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultations`
--

DROP TABLE IF EXISTS `consultations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultations` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `Uid` int DEFAULT NULL,
  `Symptoms` varchar(200) DEFAULT NULL,
  `Did` int DEFAULT NULL,
  `Response` varchar(400) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `fk_cid1_idx` (`Uid`),
  KEY `fk_cid2_idx` (`Did`),
  CONSTRAINT `fk_cid1` FOREIGN KEY (`Uid`) REFERENCES `users` (`Uid`),
  CONSTRAINT `fk_cid2` FOREIGN KEY (`Did`) REFERENCES `doctors` (`Drid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultations`
--

LOCK TABLES `consultations` WRITE;
/*!40000 ALTER TABLE `consultations` DISABLE KEYS */;
INSERT INTO `consultations` VALUES (1,1,'Heavy Cold, Fever',1,'Paracetimol','2022-02-08'),(2,1,'Sneezing, Fever',1,'Paracetimol','2022-04-06'),(4,6,'Fever, Runny/Blocked Nose, Headache',2,'Calpol-650, DOLO-650','2022-04-06'),(12,6,'Headache, Cold, Fever',1,'Paracetamol','2022-04-06'),(13,8,'Runny/Blocked Nose,\nFever,\nCold',4,'Drink boiled water,\nprevent fast food,\nparacetamol','2022-04-06'),(16,8,'Runny/Blocked Nose\nCold\nHeadache',1,'Drink hot water,\nBenadryl','2022-04-14'),(18,6,'Fever\nHeadache\nCold',1,'','2022-04-14');
/*!40000 ALTER TABLE `consultations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `Did` int NOT NULL AUTO_INCREMENT,
  `Deptno` int unsigned DEFAULT NULL,
  `Deptname` varchar(45) DEFAULT NULL,
  `Hid` int DEFAULT NULL,
  PRIMARY KEY (`Did`),
  KEY `fk_did_idx` (`Hid`),
  CONSTRAINT `fk_did` FOREIGN KEY (`Hid`) REFERENCES `hospitals` (`Hid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,10,'Cardiography',1),(2,20,'Neurology',1),(3,30,'Pharmacy',1),(4,10,'Dental',2),(5,10,'Neurology',3),(6,20,'General',3),(7,30,'Chardiology',3),(8,40,'ENT',3),(14,20,'General',2);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `Drid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Dob` date DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Mobile` varchar(45) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `Specilization` varchar(45) DEFAULT NULL,
  `Education` varchar(45) DEFAULT NULL,
  `Experience` varchar(45) DEFAULT NULL,
  `Hid` int DEFAULT NULL,
  `Lid` int DEFAULT NULL,
  PRIMARY KEY (`Drid`),
  KEY `fk_hid_idx` (`Hid`),
  KEY `fk_drid2_idx` (`Lid`),
  CONSTRAINT `fk_drid1` FOREIGN KEY (`Hid`) REFERENCES `hospitals` (`Hid`),
  CONSTRAINT `fk_drid2` FOREIGN KEY (`Lid`) REFERENCES `login` (`Lid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'Prajwal Mowade','1999-05-31','Nagpur','576234757','Male','Neurology','M.B.B.S','8',1,4),(2,'Saurabh Gunthe','1997-09-07','Nagpur','123456789','Male','Cardiology','MD','6',2,19),(3,'Harshal Patel','1990-12-19','Nagpur','676367477','Male','Dentist','BDS','9',1,20),(4,'Ravindra Jadeja','1992-11-09','Nagpur','667236774','Male','Neurology','M.B.B.S','3',3,21),(5,'Amey Sharma','1990-05-09','Nagpur','3099887766','Male','General Physician','M.B.B.S','11.0',1,22),(6,'Vaibhav Wadhi','1997-05-07','Nagpur','1122334455','Male','Neurology','M.B.B.S','3.0',1,24),(7,'Bret Lee','1985-02-05','Pune','8899007766','Male','General Physician','PHD','9.0',1,27);
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospitals`
--

DROP TABLE IF EXISTS `hospitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospitals` (
  `Hid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Ratings` varchar(45) DEFAULT NULL,
  `Lid` int DEFAULT NULL,
  PRIMARY KEY (`Hid`),
  KEY `fk_hid_idx` (`Lid`),
  CONSTRAINT `fk_hid` FOREIGN KEY (`Lid`) REFERENCES `login` (`Lid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospitals`
--

LOCK TABLES `hospitals` WRITE;
/*!40000 ALTER TABLE `hospitals` DISABLE KEYS */;
INSERT INTO `hospitals` VALUES (1,'Alexis Hospital','Bardi, Nagpur','9',2),(2,'Medtech Multispecialist Hospital','Dhantoli, Nagpur','9.3',3),(3,'Suretech Hospital','Bardi Nagpur','8.0',18),(4,'Fortis Healthcare','Pune','9.6',25),(5,'Medanta-The Medicity','Mumbai','8.9',26);
/*!40000 ALTER TABLE `hospitals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `Lid` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Lid`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'suresh@gmail.com','Suresh@123','Admin'),(2,'alexis@gmail.com','Alexis@123','Hospital'),(3,'medtech@gmail.com','Medtech@123','Hospital'),(4,'prajwalmowade99@gmail.com','Prajwal@123','Doctor'),(5,'udaykirange@gmail.com','Uday@123','User'),(10,'virat@gmail.com','Virat@123','User'),(13,'shubhman@gmail.com','Shubhman@123','User'),(14,'ishan@gmail.com','Ishan@123','User'),(15,'salman@gmail.com','Salman@123','User'),(16,'shreyash@gmail.com','Shreyash@123','User'),(17,'surya@gmail.com','Surya@123','User'),(18,'suretech@gmail.com','Suretech@123','Hospital'),(19,'saurabhgunthe21@gmail.com','Saurabh@123','Doctor'),(20,'harshal@gmail.com','Harshal@123','Doctor'),(21,'ravindra@gmail.com','Ravindra@123','Doctor'),(22,'amey@gmail.com','Amey@123','Doctor'),(24,'vaibhav@gmail.com','VAibhav@123','Doctor'),(25,'fortis@gmail.com','Fortis@123','Hospital'),(26,'medanta@gmail.com','Medanta@123','Hospital'),(27,'bret@gmail.com','Bret@123','Doctor'),(28,'sumit@gmail.com','Sumit@123','User'),(29,'saurabh@gmail.com','Saurabh2@123','User');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments_details`
--

DROP TABLE IF EXISTS `payments_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments_details` (
  `Pid` int NOT NULL AUTO_INCREMENT,
  `Accno` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Amount_paid` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Pid`),
  UNIQUE KEY `accno_UNIQUE` (`Accno`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments_details`
--

LOCK TABLES `payments_details` WRITE;
/*!40000 ALTER TABLE `payments_details` DISABLE KEYS */;
INSERT INTO `payments_details` VALUES (1,'3637846','Uday Kirange',2000.00),(2,'872454764','Virat Kohli',20000.00),(5,'676678434','Shubhman Gill',20000.00),(6,'34563289','Ishan Kishan',20000.00),(7,'34563765','Salman Khan',20000.00),(8,'98675423','Shreyash Iyyer',20000.00),(9,'98765432','Surya Yadav',20000.00),(10,'99887766','Sumit Katore',20000.00),(11,'12345643','Saurabh Shinde',20000.00);
/*!40000 ALTER TABLE `payments_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Uid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Mobile` varchar(45) DEFAULT NULL,
  `Aadharno` varchar(45) DEFAULT NULL,
  `Dob` date DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Lid` int DEFAULT NULL,
  `Pid` int DEFAULT NULL,
  PRIMARY KEY (`Uid`),
  UNIQUE KEY `Aadharno_UNIQUE` (`Aadharno`),
  KEY `fk_uid_idx` (`Lid`),
  KEY `fk_uid2_idx` (`Pid`),
  CONSTRAINT `fk_uid` FOREIGN KEY (`Lid`) REFERENCES `login` (`Lid`),
  CONSTRAINT `fk_uid2` FOREIGN KEY (`Pid`) REFERENCES `payments_details` (`Pid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Uday Kirange','Nagpur','87382764','876512343456','1999-08-09','Male','2022-03-26',5,1),(6,'Virat Kohli','Banglore','66735445','667789870990','1990-09-23','Male','2022-03-26',10,2),(7,'Shubhman Gill','Ahamadabad','86434567','837544689709','1997-12-08','Male','2022-03-26',13,5),(8,'Ishan Kishan','Mumbai','1234567890','123412341234','1997-01-22','Male','2022-03-26',14,6),(9,'Salman Khan','Delhi','6364677356','123456798765','1983-09-07','Male','2022-03-26',15,7),(10,'Shreyash Iyyer','Chennai','4567890321','123456789009','1996-05-29','Male','2022-03-26',16,8),(11,'Surya Yadav','Banglore','3214568769','123456789012','2022-03-11','Male','2022-03-27',17,9),(12,'Sumit Katore','Chandrapur','2244668800','123443211221','1991-09-17','Male','2022-04-13',28,10),(13,'Saurah Shinde','Nagpur','1234567890','543223455678','2001-05-16','Male','2022-04-13',29,11);
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

-- Dump completed on 2022-04-16  9:17:33
