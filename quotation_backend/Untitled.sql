PGDMP     ,    	            
    z            QuotationDB    15.0    15.0 G    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16390    QuotationDB    DATABASE     �   CREATE DATABASE "QuotationDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';
    DROP DATABASE "QuotationDB";
                postgres    false                        3079    16528    pgcrypto 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
    DROP EXTENSION pgcrypto;
                   false            �           0    0    EXTENSION pgcrypto    COMMENT     <   COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
                        false    2            �            1259    16391    address    TABLE     i  CREATE TABLE public.address (
    address_id numeric NOT NULL,
    address_type character varying(2),
    address_category character varying(10),
    category_key numeric,
    address_1 character varying(250),
    address_2 character varying(250),
    address_3 character varying(250),
    city character varying(50),
    state character varying(25),
    country character varying,
    start_date date,
    stop_date date,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    pin_code numeric
);
    DROP TABLE public.address;
       public         heap    postgres    false            �            1259    16479 
   catogeries    TABLE     G  CREATE TABLE public.catogeries (
    catogerie_id numeric NOT NULL,
    catogerie_title character varying(50),
    catogerie_desc character varying(1000),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);
    DROP TABLE public.catogeries;
       public         heap    postgres    false            �            1259    16398    company_dtl    TABLE     m  CREATE TABLE public.company_dtl (
    company_id numeric NOT NULL,
    company_code character varying(25) NOT NULL,
    company_name character varying(250),
    location character varying(50),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);
    DROP TABLE public.company_dtl;
       public         heap    postgres    false            �            1259    16486    customer    TABLE     &  CREATE TABLE public.customer (
    customer_id numeric NOT NULL,
    address_id numeric NOT NULL,
    customer_name character varying(250),
    customer_email character varying(150) NOT NULL,
    customer_phone_number character varying(12) NOT NULL,
    customer_alt_phone_number character varying(12),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    cust_profile character varying,
    cust_status character varying(10)
);
    DROP TABLE public.customer;
       public         heap    postgres    false            �            1259    16405    employee    TABLE     n  CREATE TABLE public.employee (
    employee_id numeric NOT NULL,
    employee_code character varying(25) NOT NULL,
    employee_name character varying(50),
    employee_email character varying(150) NOT NULL,
    employee_phone_number character varying(150) NOT NULL,
    birth_date date,
    gender character(1),
    past_exp character varying(1000),
    emp_status character varying(10),
    emp_type character varying(2),
    reporting_to numeric,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);
    DROP TABLE public.employee;
       public         heap    postgres    false            �            1259    16438 
   employment    TABLE     o  CREATE TABLE public.employment (
    employment_id numeric NOT NULL,
    employee_id numeric,
    company_id numeric,
    job_code character varying(50),
    start_date date,
    stop_date date,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);
    DROP TABLE public.employment;
       public         heap    postgres    false            �            1259    16412 	   line_item    TABLE     �  CREATE TABLE public.line_item (
    line_item_id numeric NOT NULL,
    room_type character varying(50),
    line_item_title character varying(50),
    line_item_desc character varying(1000),
    unit_price numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    tax_type character varying(20)
);
    DROP TABLE public.line_item;
       public         heap    postgres    false            �            1259    16499    login    TABLE     �  CREATE TABLE public.login (
    login_id numeric NOT NULL,
    email character varying(50) NOT NULL,
    employee_id numeric NOT NULL,
    password character varying(1000) NOT NULL,
    inserted_by character varying(50),
    inserted_date timestamp with time zone,
    updated_by character varying(50),
    updated_date time with time zone,
    access json,
    emp_status character varying(10)
);
    DROP TABLE public.login;
       public         heap    postgres    false            �            1259    16419 	   main_item    TABLE     �  CREATE TABLE public.main_item (
    main_item_id numeric NOT NULL,
    room_type character varying(50),
    main_item_title character varying(50),
    main_item_desc character varying(1000),
    unit_price numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    main_item_depth numeric(18,2),
    tax_type character varying(20)
);
    DROP TABLE public.main_item;
       public         heap    postgres    false            �            1259    16467 	   quotation    TABLE     ~  CREATE TABLE public.quotation (
    quotation_id numeric NOT NULL,
    quotation_code character varying(25),
    shop_detail_id numeric,
    address_1 character varying(250),
    address_2 character varying(250),
    address_3 character varying(250),
    city character varying(50),
    state character varying(25),
    quotation_date date,
    gene_by numeric,
    shop_manager_id numeric,
    lead_by numeric,
    reference character varying(50),
    mobile_1 numeric,
    mobile_2 numeric,
    mail_id character varying(50),
    quot_status character varying(25),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    customer_id numeric,
    customer_name character varying,
    pin_code numeric,
    lead_by_name character varying,
    country character varying(30)
);
    DROP TABLE public.quotation;
       public         heap    postgres    false            �            1259    16426    quotation_line_item    TABLE     M  CREATE TABLE public.quotation_line_item (
    quotation_id numeric NOT NULL,
    seq_no numeric NOT NULL,
    line_seq_no numeric NOT NULL,
    line_item_id numeric,
    line_item_title character varying(50),
    line_item_desc character varying(1000),
    length numeric(6,2),
    height numeric(6,2),
    depth numeric(6,2),
    tot_area numeric(6,2),
    quantity numeric,
    org_unit_price numeric(18,2),
    unit_price numeric(18,2),
    tot_price numeric(18,2),
    disc_price numeric(18,2),
    net_price numeric(18,2),
    cgst numeric(18,2),
    sgst numeric(18,2),
    igst numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    tax_type character varying(20),
    room_type character varying(30)
);
 '   DROP TABLE public.quotation_line_item;
       public         heap    postgres    false            �            1259    16431    quotation_main_item    TABLE     N  CREATE TABLE public.quotation_main_item (
    quotation_id numeric NOT NULL,
    seq_no numeric NOT NULL,
    main_item_id numeric,
    room_type character varying(30),
    main_item_title character varying(50),
    main_item_desc character varying(1000),
    length numeric(6,2),
    height numeric(6,2),
    depth numeric(6,2),
    tot_area numeric(6,2),
    quantity numeric,
    org_unit_price numeric(18,2),
    unit_price numeric(18,2),
    tot_price numeric(18,2),
    disc_price numeric(18,2),
    net_price numeric(18,2),
    cgst numeric(18,2),
    sgst numeric(18,2),
    igst numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    main_item_depth numeric(18,2),
    tax_type character varying(20)
);
 '   DROP TABLE public.quotation_main_item;
       public         heap    postgres    false            �            1259    16455    shop_detail    TABLE     U  CREATE TABLE public.shop_detail (
    shop_detail_id numeric NOT NULL,
    shop_code character varying(25),
    shop_name character varying(50),
    manager_id numeric,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);
    DROP TABLE public.shop_detail;
       public         heap    postgres    false            �          0    16391    address 
   TABLE DATA           �   COPY public.address (address_id, address_type, address_category, category_key, address_1, address_2, address_3, city, state, country, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date, pin_code) FROM stdin;
    public          postgres    false    215   �m       �          0    16479 
   catogeries 
   TABLE DATA           �   COPY public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
    public          postgres    false    225   [n       �          0    16398    company_dtl 
   TABLE DATA           �   COPY public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
    public          postgres    false    216   �n       �          0    16486    customer 
   TABLE DATA           �   COPY public.customer (customer_id, address_id, customer_name, customer_email, customer_phone_number, customer_alt_phone_number, inserted_by, inserted_date, updated_by, updated_date, cust_profile, cust_status) FROM stdin;
    public          postgres    false    226   �n       �          0    16405    employee 
   TABLE DATA           �   COPY public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
    public          postgres    false    217   �o       �          0    16438 
   employment 
   TABLE DATA           �   COPY public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
    public          postgres    false    222   dp       �          0    16412 	   line_item 
   TABLE DATA           �   COPY public.line_item (line_item_id, room_type, line_item_title, line_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, tax_type) FROM stdin;
    public          postgres    false    218   �p       �          0    16499    login 
   TABLE DATA           �   COPY public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, access, emp_status) FROM stdin;
    public          postgres    false    227   Cq       �          0    16419 	   main_item 
   TABLE DATA           �   COPY public.main_item (main_item_id, room_type, main_item_title, main_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) FROM stdin;
    public          postgres    false    219   �r       �          0    16467 	   quotation 
   TABLE DATA           Z  COPY public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name, country) FROM stdin;
    public          postgres    false    224   Zs       �          0    16426    quotation_line_item 
   TABLE DATA           E  COPY public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type, room_type) FROM stdin;
    public          postgres    false    220   t       �          0    16431    quotation_main_item 
   TABLE DATA           I  COPY public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) FROM stdin;
    public          postgres    false    221   �t       �          0    16455    shop_detail 
   TABLE DATA           �   COPY public.shop_detail (shop_detail_id, shop_code, shop_name, manager_id, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
    public          postgres    false    223   �t       �           2606    16397    address address_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pk PRIMARY KEY (address_id);
 <   ALTER TABLE ONLY public.address DROP CONSTRAINT address_pk;
       public            postgres    false    215            �           2606    16612    catogeries cat_title_uniq 
   CONSTRAINT     _   ALTER TABLE ONLY public.catogeries
    ADD CONSTRAINT cat_title_uniq UNIQUE (catogerie_title);
 C   ALTER TABLE ONLY public.catogeries DROP CONSTRAINT cat_title_uniq;
       public            postgres    false    225            �           2606    16485    catogeries catogerie_pk 
   CONSTRAINT     _   ALTER TABLE ONLY public.catogeries
    ADD CONSTRAINT catogerie_pk PRIMARY KEY (catogerie_id);
 A   ALTER TABLE ONLY public.catogeries DROP CONSTRAINT catogerie_pk;
       public            postgres    false    225            �           2606    16404    company_dtl company_dtl_pk 
   CONSTRAINT     `   ALTER TABLE ONLY public.company_dtl
    ADD CONSTRAINT company_dtl_pk PRIMARY KEY (company_id);
 D   ALTER TABLE ONLY public.company_dtl DROP CONSTRAINT company_dtl_pk;
       public            postgres    false    216            �           2606    16492    customer customer_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pk PRIMARY KEY (customer_id);
 >   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pk;
       public            postgres    false    226            �           2606    16527 $   employee employee_employee_email_key 
   CONSTRAINT     i   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_employee_email_key UNIQUE (employee_email);
 N   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_employee_email_key;
       public            postgres    false    217            �           2606    16411    employee employee_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pk PRIMARY KEY (employee_id);
 >   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pk;
       public            postgres    false    217            �           2606    16444    employment employment_pk 
   CONSTRAINT     a   ALTER TABLE ONLY public.employment
    ADD CONSTRAINT employment_pk PRIMARY KEY (employment_id);
 B   ALTER TABLE ONLY public.employment DROP CONSTRAINT employment_pk;
       public            postgres    false    222            �           2606    16418    line_item line_item_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.line_item
    ADD CONSTRAINT line_item_pk PRIMARY KEY (line_item_id);
 @   ALTER TABLE ONLY public.line_item DROP CONSTRAINT line_item_pk;
       public            postgres    false    218                        2606    16505    login login_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pk PRIMARY KEY (login_id);
 8   ALTER TABLE ONLY public.login DROP CONSTRAINT login_pk;
       public            postgres    false    227            �           2606    16425    main_item main_item_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.main_item
    ADD CONSTRAINT main_item_pk PRIMARY KEY (main_item_id);
 @   ALTER TABLE ONLY public.main_item DROP CONSTRAINT main_item_pk;
       public            postgres    false    219            �           2606    16626     quotation_line_item quot_line_pk 
   CONSTRAINT     }   ALTER TABLE ONLY public.quotation_line_item
    ADD CONSTRAINT quot_line_pk PRIMARY KEY (quotation_id, seq_no, line_seq_no);
 J   ALTER TABLE ONLY public.quotation_line_item DROP CONSTRAINT quot_line_pk;
       public            postgres    false    220    220    220            �           2606    16437 %   quotation_main_item quot_main_item_pk 
   CONSTRAINT     u   ALTER TABLE ONLY public.quotation_main_item
    ADD CONSTRAINT quot_main_item_pk PRIMARY KEY (quotation_id, seq_no);
 O   ALTER TABLE ONLY public.quotation_main_item DROP CONSTRAINT quot_main_item_pk;
       public            postgres    false    221    221            �           2606    16473    quotation quot_pk 
   CONSTRAINT     Y   ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_pk PRIMARY KEY (quotation_id);
 ;   ALTER TABLE ONLY public.quotation DROP CONSTRAINT quot_pk;
       public            postgres    false    224            �           2606    16461    shop_detail shop_detail_pk 
   CONSTRAINT     d   ALTER TABLE ONLY public.shop_detail
    ADD CONSTRAINT shop_detail_pk PRIMARY KEY (shop_detail_id);
 D   ALTER TABLE ONLY public.shop_detail DROP CONSTRAINT shop_detail_pk;
       public            postgres    false    223            �           1259    16624    fki_cat_line_fk    INDEX     J   CREATE INDEX fki_cat_line_fk ON public.line_item USING btree (room_type);
 #   DROP INDEX public.fki_cat_line_fk;
       public            postgres    false    218            �           1259    16618    fki_cat_main_fk    INDEX     J   CREATE INDEX fki_cat_main_fk ON public.main_item USING btree (room_type);
 #   DROP INDEX public.fki_cat_main_fk;
       public            postgres    false    219            �           1259    16511    fki_login_fk1    INDEX     F   CREATE INDEX fki_login_fk1 ON public.login USING btree (employee_id);
 !   DROP INDEX public.fki_login_fk1;
       public            postgres    false    227            �           1259    16570    fki_quit_cust_fk    INDEX     M   CREATE INDEX fki_quit_cust_fk ON public.quotation USING btree (customer_id);
 $   DROP INDEX public.fki_quit_cust_fk;
       public            postgres    false    224            �           1259    16606    fki_quot_emp_fk1    INDEX     I   CREATE INDEX fki_quot_emp_fk1 ON public.quotation USING btree (lead_by);
 $   DROP INDEX public.fki_quot_emp_fk1;
       public            postgres    false    224            �           1259    16594    fki_quot_id_fk1    INDEX     W   CREATE INDEX fki_quot_id_fk1 ON public.quotation_line_item USING btree (quotation_id);
 #   DROP INDEX public.fki_quot_id_fk1;
       public            postgres    false    220            �           1259    16600    fki_quot_id_fk2    INDEX     W   CREATE INDEX fki_quot_id_fk2 ON public.quotation_main_item USING btree (quotation_id);
 #   DROP INDEX public.fki_quot_id_fk2;
       public            postgres    false    221            �           1259    16588    fki_quot_line_fk1    INDEX     Y   CREATE INDEX fki_quot_line_fk1 ON public.quotation_line_item USING btree (line_item_id);
 %   DROP INDEX public.fki_quot_line_fk1;
       public            postgres    false    220            �           1259    16576    fki_quot_main_fk    INDEX     X   CREATE INDEX fki_quot_main_fk ON public.quotation_main_item USING btree (main_item_id);
 $   DROP INDEX public.fki_quot_main_fk;
       public            postgres    false    221            �           1259    16582    fki_quot_main_fk1    INDEX     Y   CREATE INDEX fki_quot_main_fk1 ON public.quotation_main_item USING btree (main_item_id);
 %   DROP INDEX public.fki_quot_main_fk1;
       public            postgres    false    221                       2606    16619    line_item cat_line_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.line_item
    ADD CONSTRAINT cat_line_fk FOREIGN KEY (room_type) REFERENCES public.catogeries(catogerie_title) NOT VALID;
 ?   ALTER TABLE ONLY public.line_item DROP CONSTRAINT cat_line_fk;
       public          postgres    false    225    3577    218                       2606    16613    main_item cat_main_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.main_item
    ADD CONSTRAINT cat_main_fk FOREIGN KEY (room_type) REFERENCES public.catogeries(catogerie_title) NOT VALID;
 ?   ALTER TABLE ONLY public.main_item DROP CONSTRAINT cat_main_fk;
       public          postgres    false    225    3577    219                       2606    16493    customer cust_comp_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT cust_comp_fk FOREIGN KEY (address_id) REFERENCES public.address(address_id);
 ?   ALTER TABLE ONLY public.customer DROP CONSTRAINT cust_comp_fk;
       public          postgres    false    215    3546    226                       2606    16445    employment empl_comp_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.employment
    ADD CONSTRAINT empl_comp_fk FOREIGN KEY (company_id) REFERENCES public.company_dtl(company_id);
 A   ALTER TABLE ONLY public.employment DROP CONSTRAINT empl_comp_fk;
       public          postgres    false    216    3548    222                       2606    16450    employment empl_emp_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.employment
    ADD CONSTRAINT empl_emp_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id);
 @   ALTER TABLE ONLY public.employment DROP CONSTRAINT empl_emp_fk;
       public          postgres    false    3552    222    217                       2606    16506    login login_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_fk1 FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id) NOT VALID;
 9   ALTER TABLE ONLY public.login DROP CONSTRAINT login_fk1;
       public          postgres    false    227    217    3552            
           2606    16565    quotation quit_cust_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quit_cust_fk FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id) NOT VALID;
 @   ALTER TABLE ONLY public.quotation DROP CONSTRAINT quit_cust_fk;
       public          postgres    false    226    3581    224                       2606    16601    quotation quot_emp_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_emp_fk1 FOREIGN KEY (lead_by) REFERENCES public.employee(employee_id) NOT VALID;
 @   ALTER TABLE ONLY public.quotation DROP CONSTRAINT quot_emp_fk1;
       public          postgres    false    224    217    3552                       2606    16589    quotation_line_item quot_id_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation_line_item
    ADD CONSTRAINT quot_id_fk1 FOREIGN KEY (quotation_id) REFERENCES public.quotation(quotation_id) NOT VALID;
 I   ALTER TABLE ONLY public.quotation_line_item DROP CONSTRAINT quot_id_fk1;
       public          postgres    false    220    3575    224                       2606    16627    quotation_main_item quot_id_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation_main_item
    ADD CONSTRAINT quot_id_fk1 FOREIGN KEY (quotation_id) REFERENCES public.quotation(quotation_id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 I   ALTER TABLE ONLY public.quotation_main_item DROP CONSTRAINT quot_id_fk1;
       public          postgres    false    224    221    3575                       2606    16583 !   quotation_line_item quot_line_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation_line_item
    ADD CONSTRAINT quot_line_fk1 FOREIGN KEY (line_item_id) REFERENCES public.line_item(line_item_id) NOT VALID;
 K   ALTER TABLE ONLY public.quotation_line_item DROP CONSTRAINT quot_line_fk1;
       public          postgres    false    220    3555    218                       2606    16577 !   quotation_main_item quot_main_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation_main_item
    ADD CONSTRAINT quot_main_fk1 FOREIGN KEY (main_item_id) REFERENCES public.main_item(main_item_id) NOT VALID;
 K   ALTER TABLE ONLY public.quotation_main_item DROP CONSTRAINT quot_main_fk1;
       public          postgres    false    219    3558    221                       2606    16474    quotation quot_shop_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_shop_fk FOREIGN KEY (shop_detail_id) REFERENCES public.shop_detail(shop_detail_id);
 @   ALTER TABLE ONLY public.quotation DROP CONSTRAINT quot_shop_fk;
       public          postgres    false    224    223    3571            	           2606    16462    shop_detail shop_empl_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.shop_detail
    ADD CONSTRAINT shop_empl_fk FOREIGN KEY (manager_id) REFERENCES public.employee(employee_id);
 B   ALTER TABLE ONLY public.shop_detail DROP CONSTRAINT shop_empl_fk;
       public          postgres    false    217    223    3552            �   �   x����
�0��s�}�Y��Z��`a;��%L�������n2񴋐KH�~�y��"�����ub܇�;�S/��SW1�� � &��`M ��<��7�mpF�S?�}�2i6󧄆<_�v���;u��(6�<6�65��y��D���B�n�ZJ��wj�      �   6   x�3���,I�H̓��FFF�����&
&V�fV�Fzf&�1~@����� �c�      �   I   x�3��O�H̃R
>%)��.�A�N�.����!���FFF�����F
��V�VƆz&&��1~@����� ȱV      �   �   x����
�0�ϛ��4�槉9)"��z)�z�?h�i��>���'a`��o$��%����!��u���)�[
�)�m\�1�tf~�D)3��4G��GJ�sP�� �u�;n�����o�.����"���q��H��d�B3�敖Q �qEq(�oI%coBOA8      �   �   x����
�0�ϛ��4�n���T�<�Ez�Zlж`E����ă���~3�  ��̗0܆K�f�~����]߂%DcNT�����b����dd��b∬C��Tۇ`":B��Fi�
V�z�}�k8���ג�����g�W�+kR��TF��)��֢�B�;1�>)      �   p   x�3�4 �Ĕ��<N###]CC]C�?����W_���������������%PB�������������%�!�!P68#��71/1=��`� m�VF�zƦ� �?�=... k�       �   O   x�3���,I�H�����KU0�P.��ɜFz�@���������������������)g��T��r��qqq ��      �   �  x����N�@E��� �G��)�IE�r7��Č3�m�KK��ݶ:/Ѥ/{�{�4]��C}K������s�ڮ�¨LhY?)�HtX�ҙm�dJ:�;�F��k*�1���`��7�y{�\�8!��
�\-bݬ&14�fT�z$�[i�H9/�3���(N�A�֛4��x����e�,�e_�oIe	Y9Y	hYw���~N�UL�Ϣ<)���d(�$�P�`�p�� ��R PZ P� P� �;:k��'킎���w�^0�J�J��$��9��Mx�6���x�O��^}Z5>�� �C�.�c����%��%������i�����4�5��oL����v�(C�?Y=Q��1���Xn���`v�W�%{���[JV�YJ!�WJV!�UJ�B�N=h�B�ǟ��      �   N   x�3���,I�H���,I�U0S�Fz�@���������������������!g�A��T��r��qqq -rv      �   �   x�U��
�@���+�rx3:R�
��(#ڼth^��~�D���r��{�\��|k���-=�MޱXs�[�= \��ҍ}M��µ$N-�s�Q�P�P�#���P��$zn��sI���-��pM�GE��y3`����#0N#�b"�d�(��8E%�|���|0"F�]��� ��`
n2�f|@4      �   [   x�3�4 C�̼TC�Z���@��z�F(4
�"42�54�54Q0��26�2��344�**�,H�7���,I�H������ �1�      �   a   x�3�4 B�̒��<�̒�\C0�i�g`���id` b����`6P�F� � D(hd�kh�kh�``ielneb�ghdU5��� 5ސ+F��� zR�      �      x������ � �     