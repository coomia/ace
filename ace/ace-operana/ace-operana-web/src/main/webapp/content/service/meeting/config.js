var cfg = {};
cfg.view_load_data_url = contextPath + '/meeting/selectMeetingByPrimaryKey.do';
cfg.grid_load_data_url = contextPath + '/meeting/findMeetingList.do';
cfg.grid_add_data_url = contextPath + '/meeting/insertMeeting.do';
cfg.grid_edit_data_url = contextPath + '/meeting/updateMeeting.do';
cfg.grid_delete_data_url = contextPath + '/meeting/deleteMeetingByMeetingId.do';
cfg.grid_selector= "#grid-table";
cfg.pager_selector= "#grid-pager";
//cfg.caption= "参数";
cfg.rowNum= default_page_list[0];
cfg.dataId= 'id';
cfg.gridHeight='auto';
cfg.jgridEditWinWidth=850;
cfg.jgridAlertWidth=400;
cfg.jgrdInfoDialogWidth=500;