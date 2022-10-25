package com.example.angularvsjava.utils;

public class Constants{
    public static class RESPONSE_TYPE {
        public static final String SUCCESS = "SUCCESS";
        public static final String ERROR = "ERROR";
        public static final String WARNING = "WARNING";
        public static final String CONFIRM = "CONFIRM";
        public static final String ERROR_LOGIN = "ERROR LOGIN";
        public static final String invalidPermission = "invalidPermission";
    }

    public static class RESPONSE_CODE {
        public static final String SUCCESS = "success";
        public static final String DELETE_SUCCESS = "deleteSuccess";
        public static final String ERROR = "error";
        public static final String WARNING = "warning";
        public static final String ERROR_LOGIN = "error login";
        public static final String RECORD_DELETED = "record.deleted";
        public static final String invalidPermission = "Invalid Permission";
    }

    public static class AUTHEN_INFO {
        public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 5 * 60 * 60;
        public static final String SIGNING_KEY = "devglan123r";
        public static final String TOKEN_PREFIX = "Bearer ";
        public static final String HEADER_STRING = "Authorization";
        public static final String AUTHORITIES_KEY = "scopes";
    }

    public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 5 * 60 * 60;
    public static final String SIGNING_KEY = "devglan123r";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String AUTHORITIES_KEY = "scopes";


    // Cấp bậc menu
    public static class LEVEL {
        public static final Integer ONE = 1;
        public static final Integer TWO = 2;

        private LEVEL() {
        }
    }

    // Trạng thái
    public static class ACTIVE {
        public static final Integer IS_ACTIVE = 1;
        public static final Integer NOT_ACTICE = 0;

        private ACTIVE() {
        }
    }
    public static class STATUS {
        public static final Integer INCOMPLETE = 0;
        public static final Integer COMPLETE = 1;

        private STATUS() {
        }
    }

    public static class MAILVERIFY {
        public static final String DENY = "deny";
        public static final String ACCEPT = "accept";
    }

    // Tạo lớp hằng kiểm tra đã support chưa
    public static class SUPPORT {
        public static final Integer IS_NOT_SUPPORTED = 0;
        public static final Integer IS_SUPPORTED = 1;

        private SUPPORT() {
        }
    }

    public static class METHOD {
        public static final String FIND_BY_ID = "findById";
        public static final String SAVE = "save";
        public static final String UPDATE = "update";
        public static final String DELETE = "delete";
        public static final String GET_ALL = "get all";
    }

    public static class ERROR {
        public static final String string = "is empty";
    }

    public static class ROLE{
        public static final Long ADMIN = 1L;
        public static final Long EMPLOYEE = 2L;
        public static final Long TECH_LEAD = 3L;
        public static final Long TEST_LEAD = 4L;
    }

    public static class MAIL {
        public static final  String fromAddress = "Your email address";
        public static final  String senderName = "Your company name";
        public static final  String subject = "Please verify your registration";
        public static final  String content = "Dear bạn,<br>"
                + "Please click the link below to verify your registration:<br>";
        public static final  String thankyou ="Thank you,<br>";
        public static final  String nameCompany ="Your company name.";
    }
}
