<?php

    //declare(strict_types=1);

    class Calendar extends DB_Connect{
        /*
        *   @var string the date being used
        */
        private $_useDate;

        /*
        *   @var int the month being used
        */
        private $_m;

        /*
        *   @var int the year being used
        */
        private $_y;

        /*
        *   @var int number of days of the month
        */
        private $_daysInMonth;

        /*
        *   @var int the day of the week the month starts
        */
        private $_startDay;

        public function __construct($dbo=NULL, $useDate=NULL){
            parent::__construct($dbo);

            if(isset($useDate)){
                $this->_useDate = $useDate;
            } else {
                $this->_useDate = date('Y-m-d H:i:s');
            }

            $ts = strtotime($this->_useDate);
            $this->_m = (int) date('m',$ts);
            $this->_y = (int) date('Y',$ts);
            
            $this->_daysInMonth = cal_days_in_month(CAL_GREGORIAN, $this->_m, $this->_y);

            $ts = mktime(0, 0, 0, $this->_m, 1, $this->_y);
            $this->_startDay = (int) date('w', $ts);
        }
    }

?>