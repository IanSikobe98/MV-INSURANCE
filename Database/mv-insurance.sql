-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2020 at 06:04 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mv-insurance`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `Name` varchar(200) DEFAULT NULL,
  `Signlink` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`Name`, `Signlink`) VALUES
('AAR', 'http://ianapu.000webhostapp.com/sign.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `countyval`
--

CREATE TABLE `countyval` (
  `County` varchar(125) NOT NULL,
  `valgararage` varchar(125) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countyval`
--

INSERT INTO `countyval` (`County`, `valgararage`) VALUES
('Baringo ', ' Nanyuki rd,Chadwick house ground floor,Laikipia County '),
('Bomet ', ' NENKAI PLAZA,NAROK COUNTY '),
('Bungoma ', ' AMBWERE PLAZA,KITALE,TRANS-NZOIA COUNTY '),
('Busia ', ' Emmisioma Building 2nd Flr behind Post Bank, Along Cannon Awori Street,Kakamega County '),
('Elgeyo-Marakwet ', ' WATERGATE PLAZA,ELDORET,UASIN GISHU COUNTY '),
('Embu ', ' Neema Plaza '),
('Garissa ', ' KCB BUILDING 2ND FLOOR,KITUI COUNTY \r\n'),
('Homa Bay ', ' UPENDO PLAZA,KISII COUNTY \r\n'),
('Isiolo ', ' Twin Plaza 3rd floor,Meru County '),
('Kajiado ', ' Tymes Arcade 2nd Flr,Ongata Rongai \r\n'),
('Kakamega \r\n', ' Emmisioma Building 2nd Flr behind Post Bank, Along Cannon Awori Street \r\n'),
('Kericho \r\n', ' JEMI PLAZA ROOM NO. BA9,Next to Bank of Africa Opposite Garden Hotel '),
('Kiambu ', ' Ivory Towers Room B4, Kikuyu '),
('Kilifi ', ' Royal Complex,malindi '),
('Kirinyaga \r\n', ' KERUGOYA\r\n'),
('Kisii ', ' UPENDO PLAZA\r\n'),
('Kisumu \r\n', ' AWORI HOUSE\r\n'),
('Kitui \r\n', ' KCB BUILDING 2ND FLOOR'),
('Kwale \r\n', ' Yunis building 3rd floor,Mombasa County \r\n'),
('Laikipia \r\n', ' Nanyuki rd, Chadwick house ground floor \r\n'),
('Lamu \r\n', ' Royal Complex,malindi,Kilifi County '),
('Machakos \r\n', ' Pema House\r\n'),
('Makueni ', ' Pema House,Machakos County \r\n'),
('Mandera \r\n', ' Twin Plaza 3rd floor,Meru County \r\n'),
('Marsabit \r\n', ' Twin Plaza 3rd floor,Meru County \r\n'),
('Meru \r\n', ' Twin Plaza 3rd floor\r\n'),
('Migori \r\n', ' UPENDO PLAZA,KISII COUNTY \r\n'),
('Mombasa', 'Yunis building 3rd floor'),
('Murang\'a', ' Gathii House,Nyeri County \r\n'),
('Nairobi', 'Upperhill office,along Matumbato road'),
('Nakuru \r\n', ' MASTERS PLAZA 4TH FLOOR WING 2 ROOM 1 \r\n'),
('Nandi  \r\n', ' WATERGATE PLAZA,ELDORET,UASIN GISHU COUNTY '),
('Narok \r\n', ' NENKAI PLAZA'),
('Nyamira ', ' UPENDO PLAZA,KISII COUNTY '),
('Nyandarua \r\n', ' MASTERS PLAZA 4TH FLOOR WING 2 ROOM 1,NAKURU COUNTY '),
('Nyeri \r\n', ' Gathii House\r\n'),
('Samburu \r\n', ' Nanyuki rd, Chadwick house ground floor,Laikipia County '),
('Siaya \r\n', ' Emmisioma Building 2nd Flr behind Post Bank, Along Cannon Awori Street,Kakamega County \r\n'),
('Taita Taveta \r\n', ' KCB BUILDING 2ND FLOOR,KITUI COUNTY \r\n'),
('Tana River \r\n', ' KCB BUILDING 2ND FLOOR,KITUI COUNTY \r\n'),
('Tharaka Nithi ', ' Twin Plaza 3rd floor,Meru County \r\n'),
('Trans-Nzoia ', ' AMBWERE PLAZA,KITALE \r\n'),
('Turkana \r\n', ' Nanyuki rd, Chadwick house ground floor,Laikipia County \r\n'),
('Uasin Gishu \r\n', ' WATERGATE PLAZA,ELDORET \r\n'),
('Vihiga ', ' Emmisioma Building 2nd Flr behind Post Bank,Along Cannon Awori Street,Kakamega County \r\n'),
('Wajir \r\n', ' Twin Plaza 3rd floor,Meru County \r\n'),
('West Pokot \r\n', '  AMBWERE PLAZA,KITALE,TRANS-NZOIA COUNTY \r\n');

-- --------------------------------------------------------

--
-- Table structure for table `credit`
--

CREATE TABLE `credit` (
  `Vrno` varchar(255) DEFAULT NULL,
  `creditscore` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `credit`
--

INSERT INTO `credit` (`Vrno`, `creditscore`) VALUES
('KAR 306W', 2),
('KAR 306W', 2),
('KAR 306W', -2);

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `Licenceno` varchar(50) NOT NULL,
  `Regno` varchar(100) DEFAULT NULL,
  `Experience` int(100) NOT NULL,
  `Ohterdriver` varchar(100) NOT NULL,
  `Sickness` varchar(100) NOT NULL,
  `Conviction` varchar(100) NOT NULL,
  `Licencedate` date NOT NULL,
  `Driverno` int(100) NOT NULL,
  `Accident` varchar(10) NOT NULL,
  `Inscomp` varchar(100) NOT NULL,
  `Previns` varchar(100) NOT NULL,
  `Previns1` varchar(100) NOT NULL,
  `Previns2` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`Licenceno`, `Regno`, `Experience`, `Ohterdriver`, `Sickness`, `Conviction`, `Licencedate`, `Driverno`, `Accident`, `Inscomp`, `Previns`, `Previns1`, `Previns2`) VALUES
('WLX123', 'KAR 306W', 3, 'No', 'No', 'No', '2017-01-11', 104, 'No', 'AIG', 'No', 'No', 'No'),
('WLX123', 'KAR 306W', 3, 'No', 'No', 'No', '2017-01-17', 105, 'No', 'AIG', 'No', 'No', 'No'),
('WPA123', 'KAR 306W', 5, 'No', 'Yes', 'Yes', '2015-11-26', 106, 'Yes', 'AIG', 'Yes', 'Yes', 'No');

-- --------------------------------------------------------


--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `Transno` varchar(125) NOT NULL,
  `Amount` int(120) DEFAULT NULL,
  `Polno` varchar(120) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `certno` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`Transno`, `Amount`, `Polno`, `Date`, `certno`) VALUES
('OFP08DLATE', 2, '00/1/00000002/2020/06/25', '2020-06-25', '00000001');

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `policyno` varchar(50) NOT NULL,
  `regno` varchar(50) DEFAULT NULL,
  `issueDate` date DEFAULT NULL,
  `valuation` varchar(50) DEFAULT NULL,
  `installments` int(11) DEFAULT NULL,
  `policytype` varchar(50) DEFAULT NULL,
  `Amounttopay` int(11) NOT NULL,
  `Amountpaid` int(11) NOT NULL,
  `EndDate` date DEFAULT NULL,
  `Rate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`policyno`, `regno`, `issueDate`, `valuation`, `installments`, `policytype`, `Amounttopay`, `Amountpaid`, `EndDate`, `Rate`) VALUES
('00/1/00000002/2020/06/25', 'KAR 306W', '2020-06-25', 'No', NULL, 'Third-party', 2, 2, '2021-06-26', 5),
('01/1/00000001/2020/06/25', 'KAR 306W', '2020-06-25', 'Yes', NULL, 'Comprehensive', 120000, 0, '2021-06-26', 12),
('02/1/00000003/2020/06/25', 'KAR 306W', '2020-06-25', 'Yes', NULL, 'Third Party-fire And Theft', 220000, 0, '2021-06-26', 22);

-- --------------------------------------------------------


--
-- Table structure for table `proposer`
--

CREATE TABLE `proposer` (
  `Natid` varchar(100) NOT NULL,
  `Fname` tinytext,
  `Mname` tinytext,
  `Sname` tinytext,
  `Gender` tinytext,
  `Poa` varchar(100) DEFAULT NULL,
  `Pha` varchar(100) DEFAULT NULL,
  `Garageaddr` varchar(100) DEFAULT NULL,
  `Phonenumber` int(20) DEFAULT NULL,
  `Occupation` varchar(100) DEFAULT NULL,
  `Town` varchar(20) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Password` tinytext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposer`
--

INSERT INTO `proposer` (`Natid`, `Fname`, `Mname`, `Sname`, `Gender`, `Poa`, `Pha`, `Garageaddr`, `Phonenumber`, `Occupation`, `Town`, `DOB`, `Password`) VALUES
('35032507', 'Ian', 'Walter', 'Sikobe', 'Male', 'P.O BOX  38279-00100', 'SOSSIAN ESTATE,ALONG SPINE ROAD', 'SHELL PETROL STATION,ALONG SPINE ROAD', 716561507, 'PROGRAMMER', 'Vihiga ', '1998-08-12', '12345');

-- --------------------------------------------------------


--
-- Table structure for table `valuations`
--

CREATE TABLE `valuations` (
  `policyno` varchar(250) NOT NULL,
  `valuationvalue` int(11) DEFAULT NULL,
  `valuatorid` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `valuator`
--

CREATE TABLE `valuator` (
  `valuatorid` varchar(50) NOT NULL,
  `fname` tinytext,
  `mname` tinytext,
  `sname` tinytext,
  `workaddr` varchar(50) DEFAULT NULL,
  `valuatorno` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `valuator`
--

INSERT INTO `valuator` (`valuatorid`, `fname`, `mname`, `sname`, `workaddr`, `valuatorno`) VALUES
('12345', 'ian', 'Walter', 'Sikobe', 'nairobi', 721383105),
('31826534', 'Sok', 'Walter', 'Buda', 'Old town,Mombasa', 721250703),
('35071430', 'Antonio', 'Degoa', 'Solano', 'Harambee sacco, along manyanja Road', 774123459),
('567899', 'ian', 'Walter', 'Sikobe', 'nairobi', 721383105);

-- --------------------------------------------------------


--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `Regno` varchar(10) NOT NULL,
  `Natid` varchar(10) DEFAULT NULL,
  `VehType` varchar(100) DEFAULT NULL,
  `Model` tinytext,
  `YOM` int(5) DEFAULT NULL,
  `EngineCC` int(20) DEFAULT NULL,
  `Bodytype` varchar(100) DEFAULT NULL,
  `Sum` int(200) DEFAULT NULL,
  `OwnerId` int(11) NOT NULL,
  `Ownerfname` varchar(100) NOT NULL,
  `Ownerlname` varchar(100) DEFAULT NULL,
  `HPCcomp` varchar(50) DEFAULT NULL,
  `Vhuse` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`Regno`, `Natid`, `VehType`, `Model`, `YOM`, `EngineCC`, `Bodytype`, `Sum`, `OwnerId`, `Ownerfname`, `Ownerlname`, `HPCcomp`, `Vhuse`) VALUES
('KAR 306W', '35032507', 'Motorvehicle', 'Subaru Legacy', 2012, 1500, 'Sedan', 1000000, 35032507, 'Ian', 'Sikobe', 'No', 'Private');

-- --------------------------------------------------------

--
-- Structure for view `creditscore`
--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countyval`
--
ALTER TABLE `countyval`
  ADD PRIMARY KEY (`County`);

--
-- Indexes for table `credit`
--
ALTER TABLE `credit`
  ADD KEY `Vrno` (`Vrno`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`Driverno`),
  ADD KEY `Regno` (`Regno`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`Transno`),
  ADD KEY `Polno` (`Polno`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`policyno`),
  ADD KEY `Regno` (`regno`);

--
-- Indexes for table `proposer`
--
ALTER TABLE `proposer`
  ADD PRIMARY KEY (`Natid`),
  ADD KEY `Town` (`Town`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `valuations`
--
ALTER TABLE `valuations`
  ADD PRIMARY KEY (`policyno`),
  ADD KEY `valuatorid` (`valuatorid`);

--
-- Indexes for table `valuator`
--
ALTER TABLE `valuator`
  ADD PRIMARY KEY (`valuatorid`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`Regno`),
  ADD KEY `Natid` (`Natid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `Driverno` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `credit`
--
ALTER TABLE `credit`
  ADD CONSTRAINT `credit_ibfk_1` FOREIGN KEY (`Vrno`) REFERENCES `vehicle` (`Regno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`Regno`) REFERENCES `vehicle` (`Regno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`Polno`) REFERENCES `policies` (`policyno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `policies`
--
ALTER TABLE `policies`
  ADD CONSTRAINT `policies_ibfk_1` FOREIGN KEY (`Regno`) REFERENCES `vehicle` (`Regno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `proposer`
--
ALTER TABLE `proposer`
  ADD CONSTRAINT `proposer_ibfk_1` FOREIGN KEY (`Town`) REFERENCES `countyval` (`County`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `valuations`
--
ALTER TABLE `valuations`
  ADD CONSTRAINT `valuations_ibfk_1` FOREIGN KEY (`valuatorid`) REFERENCES `valuator` (`ValuatorID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `valuations_ibfk_2` FOREIGN KEY (`policyno`) REFERENCES `policies` (`policyno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`Natid`) REFERENCES `proposer` (`Natid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
