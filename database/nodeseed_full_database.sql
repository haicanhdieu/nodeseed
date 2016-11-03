DROP SCHEMA IF EXISTS `nodeseed` ;
CREATE SCHEMA `nodeseed` ;

USE `nodeseed`;


--
-- Table structure for table `tblCustomer`
--
DROP TABLE IF EXISTS `tblCustomer`;
CREATE TABLE `tblCustomer` (
  `CustomerId` int(11) NOT NULL AUTO_INCREMENT,
  `CustomerNo` varchar(45) NOT NULL,
  `CustomerName` varchar(45) NOT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Address` varchar(200) DEFAULT NULL,
  `Mobile` varchar(45) DEFAULT NULL,
  `Tel` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,  
  `Deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`CustomerId`),
  UNIQUE KEY `CustomerId_UNIQUE` (`CustomerId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Sample data for table `tblCustomer`
--
INSERT INTO `tblCustomer` (`CustomerNo`,`CustomerName`,`Description`,`Deleted`) VALUES (uuid(),'Van Thinh Phat','',0);
INSERT INTO `tblCustomer` (`CustomerNo`,`CustomerName`,`Description`,`Deleted`) VALUES (uuid(),'Cong ty CP REE','',0);
INSERT INTO `tblCustomer` (`CustomerNo`,`CustomerName`,`Description`,`Deleted`) VALUES (uuid(),'Cong ty CP FPT','',0);

