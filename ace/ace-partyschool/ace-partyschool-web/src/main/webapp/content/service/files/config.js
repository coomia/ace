var cfg = {};
cfg.view_load_data_url = contextPath + '/files/selectFilesByPrimaryKey';
cfg.grid_load_data_url = contextPath + '/files/findFilesList';
cfg.grid_add_data_url = contextPath + '/files/insertFiles';
cfg.grid_edit_data_url = contextPath + '/files/updateFiles';
cfg.grid_delete_data_url = contextPath + '/files/deleteFilesByFilesId';
cfg.grid_selector = "#grid-table";
cfg.pager_selector = "#grid-pager";
//cfg.caption= "参数";
cfg.rowNum = default_page_list[0];
cfg.dataId = 'id';
cfg.gridHeight = 'auto';
cfg.jgridEditWinWidth = 1200;
cfg.jgridAlertWidth = 400;
cfg.jgrdInfoDialogWidth = 500;