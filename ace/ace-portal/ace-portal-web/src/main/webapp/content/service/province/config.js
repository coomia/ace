var cfg = {};
cfg.view_load_data_url = contextPath + '/province/selectProvinceByPrimaryKey.do';
cfg.grid_load_data_url = contextPath + '/province/findProvinceList.do';
cfg.grid_add_data_url = contextPath + '/province/insertProvince.do';
cfg.grid_edit_data_url = contextPath + '/province/updateProvince.do';
cfg.grid_delete_data_url = contextPath + '/province/deleteProvinceByProvinceId.do';
cfg.grid_selector= "#grid-table";
cfg.pager_selector= "#grid-pager";
//cfg.caption= "参数";
cfg.rowNum= default_page_list[0];
cfg.dataId= 'code';
cfg.gridHeight='auto';
cfg.jgridEditWinWidth=550;
cfg.jgridAlertWidth=400;
cfg.jgrdInfoDialogWidth=500;