// -- Database: QuotationDB

const drop_QuotationDB='DROP DATABASE IF EXISTS "QuotationDB"';


const create_QuotationDB=`CREATE DATABASE "QuotationDB"
    WITH
    OWNER = postgres
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False`;
	
// -- address definition

// const drop_employee=`Drop tabl`e

const drop_address=`DROP TABLE address`;

const crate_address=`CREATE TABLE address (
	address_id numeric NOT NULL,
	address_type varchar(2) NULL,
	address_category varchar(10) NULL,
	category_key numeric NULL,
	address_1 varchar(250) NULL,
	address_2 varchar(250) NULL,
	address_3 varchar(250) NULL,
	city varchar(50) NULL,
	state varchar(25) NULL,
	country varchar(2) NULL,
	start_date date NULL,
	stop_date date NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT address_pk PRIMARY KEY (address_id)
)`;


// -- company_dtl definition

// const drop_employee=`Drop tabl`e

const drop_company_dtl=`DROP TABLE company_dtl`;

const create_company_dtl=`CREATE TABLE company_dtl (
	company_id numeric NOT NULL,
	company_code varchar(25) NOT NULL,
	company_name varchar(250) NULL,
	"location" varchar(50) NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT company_dtl_pk PRIMARY KEY (company_id)
)`;


// -- employee definition

// const drop_employee=`Drop tabl`e

const drop_employee=`DROP TABLE employee`;

const create_employee=`CREATE TABLE employee (
	employee_id numeric NOT NULL,
	employee_code varchar(25) NOT NULL,
	employee_name varchar(50) NULL,
    employee_email varchar(150) NOT NULL,
    employee_phone_number varchar(150) NOT NULL,
	birth_date date NULL,
	gender bpchar(1) NULL,
	past_exp varchar(1000) NULL,
	emp_status varchar(2) NULL,
	emp_type varchar(2) NULL,
	reporting_to numeric NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT employee_pk PRIMARY KEY (employee_id)
)`;


// -- line_item definition

// const drop_employee=`Drop tabl`e

const drop_line_item=`DROP TABLE line_item`;

const create_line_item=`CREATE TABLE line_item (
	line_item_id numeric NOT NULL,
	room_type varchar(2) NULL,
	line_item_title varchar(50) NULL,
	line_item_desc varchar(1000) NULL,
	unit_price numeric(18, 2) NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT line_item_pk PRIMARY KEY (line_item_id)
)`;


// -- main_item definition

// const drop_employee=`Drop tabl`e

const drop_main_item=`DROP TABLE main_item`;

const create_main_item=`CREATE TABLE main_item (
	main_item_id numeric NOT NULL,
	room_type varchar(2) NULL,
	main_item_title varchar(50) NULL,
	main_item_desc varchar(1000) NULL,
	unit_price numeric(18, 2) NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT main_item_pk PRIMARY KEY (main_item_id)
)`;


// -- quotation_line_item definition

// const drop_employee=`Drop tabl`e

const drop_quotation_line_item=`DROP TABLE quotation_line_item`;

const create_quotation_line_item=`CREATE TABLE quotation_line_item (
	quotation_id numeric NULL,
	seq_no numeric NULL,
	line_seq_no numeric NULL,
	line_item_id numeric NULL,
	line_item_title varchar(50) NULL,
	line_item_desc varchar(1000) NULL,
	length numeric(6, 2) NULL,
	height numeric(6, 2) NULL,
	"depth" numeric(6, 2) NULL,
	tot_area numeric(6, 2) NULL,
	quantity numeric NULL,
	org_unit_price numeric(18, 2) NULL,
	unit_price numeric(18, 2) NULL,
	tot_price numeric(18, 2) NULL,
	disc_price numeric(18, 2) NULL,
	net_price numeric(18, 2) NULL,
	cgst numeric(18, 2) NULL,
	sgst numeric(18, 2) NULL,
	igst numeric(18, 2) NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL
)`;


// -- quotation_main_item definition

// const drop_employee=`Drop tabl`e

const drop_quotation_main_item=`DROP TABLE quotation_main_item`;

const create_quotation_main_item=`CREATE TABLE quotation_main_item (
	quotation_id numeric NOT NULL,
	seq_no numeric NOT NULL,
	main_item_id numeric NULL,
	room_type varchar(2) NULL,
	main_item_title varchar(50) NULL,
	main_item_desc varchar(1000) NULL,
	length numeric(6, 2) NULL,
	height numeric(6, 2) NULL,
	"depth" numeric(6, 2) NULL,
	tot_area numeric(6, 2) NULL,
	quantity numeric NULL,
	org_unit_price numeric(18, 2) NULL,
	unit_price numeric(18, 2) NULL,
	tot_price numeric(18, 2) NULL,
	disc_price numeric(18, 2) NULL,
	net_price numeric(18, 2) NULL,
	cgst numeric(18, 2) NULL,
	sgst numeric(18, 2) NULL,
	igst numeric(18, 2) NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT quot_main_item_pk PRIMARY KEY (quotation_id, seq_no)
)`;


// -- employment definition

// const drop_employee=`Drop tabl`e

const drop_employment=`DROP TABLE employment`;

const create_employment=`CREATE TABLE employment (
	employment_id numeric NOT NULL,
	employee_id numeric NULL,
	company_id numeric NULL,
	job_code varchar(2) NULL,
	start_date date NULL,
	stop_date date NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT employment_pk PRIMARY KEY (employment_id),
	CONSTRAINT empl_comp_fk FOREIGN KEY (company_id) REFERENCES company_dtl(company_id),
	CONSTRAINT empl_emp_fk FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
)`;


// -- shop_detail definition

// const drop_employee=`Drop tabl`e

const drop_shop_detail=`DROP TABLE shop_detail`;

const create_shop_detail=`CREATE TABLE shop_detail (
	shop_detail_id numeric NOT NULL,
	shop_code varchar(25) NULL,
	shop_name varchar(50) NULL,
	manager_id numeric NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT shop_detail_pk PRIMARY KEY (shop_detail_id),
	CONSTRAINT shop_empl_fk FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
)`;


// -- quotation definition

// const drop_employee=`Drop tabl`e

const drop_quotation=`DROP TABLE quotation`;

const create_quotation=`CREATE TABLE quotation (
	quotation_id numeric NOT NULL,
	quotation_code varchar(25) NULL,
	shop_detail_id numeric NULL,
	customer_name varchar(50) NULL,
	address_1 varchar(250) NULL,
	address_2 varchar(250) NULL,
	address_3 varchar(250) NULL,
	city varchar(50) NULL,
	state varchar(25) NULL,
	quotation_date date NULL,
	gene_by numeric NULL,
	shop_manager_id numeric NULL,
	lead_by numeric NULL,
	reference varchar(50) NULL,
	mobile_1 numeric NULL,
	mobile_2 numeric NULL,
	mail_id varchar(50) NULL,
	quot_status varchar(2) NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT quot_pk PRIMARY KEY (quotation_id),
	CONSTRAINT quot_shop_fk FOREIGN KEY (shop_detail_id) REFERENCES shop_detail(shop_detail_id)
)`;



// -- quotation definition

// const drop_employee=`Drop tabl`e

const drop_catogeries=`DROP TABLE catogeries`;

const create_catogeries=`CREATE TABLE catogeries (
	catogerie_id numeric NOT NULL,
	catogerie_title varchar(50) NULL,
	catogerie_desc varchar(1000) NULL,
    inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT catogerie_pk PRIMARY KEY (catogerie_id)
)`;


const create_customer=`
CREATE TABLE customer (
	customer_id numeric NOT NULL,
	address_id  NUMERIC Not null,
	customer_name varchar(250) NULL,
	customer_email varchar(150) NOT NULL,
    customer_phone_number varchar(12) NOT NULL,
    customer_alt_phone_number varchar(12) NULL,
	inserted_by varchar(50) NULL,
	inserted_date timestamp NULL,
	updated_by varchar(50) NULL,
	updated_date timestamp NULL,
	CONSTRAINT customer_pk PRIMARY KEY (customer_id),
	CONSTRAINT cust_comp_fk FOREIGN KEY (address_id) REFERENCES address(address_id)
)
`



module.exports={
    drop_QuotationDB,
    create_QuotationDB,
    drop_address,
    crate_address,
    drop_company_dtl,
    create_company_dtl,
    drop_employee,
    create_employee,
    drop_line_item,
    create_line_item,
    drop_main_item,
    create_main_item,
    drop_quotation_line_item,
    create_quotation_line_item,
    drop_quotation_main_item,
    create_quotation_main_item,
    drop_employment,
    create_employment,
    drop_shop_detail,
    create_shop_detail,
    drop_quotation,
    create_quotation,
    // drop_catogeries,
    // create_catogeries
}