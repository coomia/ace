var cfg = {};
cfg.view_load_data_url = contextPath + '/roadSection/selectRoadSectionByPrimaryKey';
cfg.grid_load_data_url = contextPath + '/roadSection/findRoadSectionList';
cfg.grid_add_data_url = contextPath + '/roadSection/insertRoadSection';
cfg.grid_edit_data_url = contextPath + '/roadSection/updateRoadSection';
cfg.grid_delete_data_url = contextPath + '/roadSection/deleteRoadSectionByRoadSectionId';
cfg.grid_selector = "#grid-table";
cfg.pager_selector = "#grid-pager";
//cfg.caption= "参数";
cfg.rowNum = default_page_list[0];
cfg.dataId = 'id';
cfg.gridHeight = 'auto';
cfg.jgridEditWinWidth = 1200;
cfg.jgridAlertWidth = 400;
cfg.jgrdInfoDialogWidth = 500;
