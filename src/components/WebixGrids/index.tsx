
import React, { useEffect } from 'react';
import 'webix';
import * as webix from 'webix';

const WebixGrids = () => {
  useEffect(() => {
    const grid1 = {
      view: 'datatable',
      columns: [
        { id: 'rank', header: '', css: 'rank' },
        { id: 'title', header: 'Film title', fillspace: true },
        { id: 'year', header: 'Released' },
        { id: 'votes', header: 'Votes' },
      ],
      autoheight: true,
      scroll: 'auto',
      url: '//docs.webix.com/samples/15_datatable/01_loading/data/data.json',
    };

    const grid2 = {
      view: 'datatable',
      columns: [
        { id: 'rank', header: '', css: 'rank' },
        { id: 'title', header: 'Film title', fillspace: true },
        { id: 'year', header: 'Released' },
        { id: 'votes', header: 'Votes' },
      ],
      autoheight: true,
      scroll: 'auto',
      datatype: 'xml',
      url: '//docs.webix.com/samples/15_datatable/01_loading/data/data.xml',
    };

    const grid3 = {
      view: 'datatable',
      columns: [
        { id: 'data5', header: '', css: 'rank' },
        { id: 'data1', header: 'Film title', fillspace: true },
        { id: 'data2', header: 'Released' },
        { id: 'data3', header: 'Votes' },
      ],
      autoheight: true,
      datatype: 'csv',
      url: '//docs.webix.com/samples/15_datatable/01_loading/data/data.csv',
    };

    const grid4 = {
      view: 'datatable',
      columns: [
        { id: 'data5', header: '', css: 'rank' },
        { id: 'data1', header: 'Film title', fillspace: true },
        { id: 'data2', header: 'Released' },
        { id: 'data3', header: 'Votes' },
      ],
      autoheight: true,
      datatype: 'jsarray',
      url: '//docs.webix.com/samples/15_datatable/01_loading/data/data.js',
    };

    webix.ui({
      container: 'webix-container',
      view: 'scrollview',
      scroll: 'y',
      body: {
        rows: [
          { view: 'label', label: 'JSON' },
          grid1,
          { view: 'label', label: 'XML' },
          grid2,
          { view: 'label', label: 'CSV' },
          grid3,
          { view: 'label', label: 'jsArray' },
          grid4,
        ],
      },
    });
  }, []);

  return <div id="webix-container"></div>;
};

export default WebixGrids;
