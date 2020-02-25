import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Dropdown, Menu, Icon, Tabs, Table } from "antd";
import Img1 from "../../../../../assets/images/Front.png";
import Img2 from "../../../../../assets/images/Side.png";
import Img3 from "../../../../../assets/images/Back.png";
import Img4 from "../../../../../assets/images/Side2.png";

const { TabPane } = Tabs;

const imgUrl = [
  {
    url: Img1,
    key: 1
  },

  {
    url: Img2,
    key: 2
  },

  {
    url: Img3,
    key: 3
  },

  {
    ur1: Img4,
    key: 4
  }
];
const columns = [
  {
    title: "Order Value",
    dataIndex: "orderValue",
    render: orderValue => {
      return (
        <>
          <span style={{ color: "#007BFF" }}>{`$${orderValue}`}</span>
          <Divider type="vertical" />
        </>
      );
    }
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    render: orderDate => {
      return (
        <>
          <span style={{ color: "#007BFF" }}>{`$${orderDate}`}</span>
          <Divider type="vertical" />
        </>
      );
    }
  },
  {
    title: "Delivery Method",
    dataIndex: "deliveryMethod",
    render: deliveryMethod => {
      return (
        <>
          <span style={{ color: "#007BFF" }}>{deliveryMethod}</span>
          <span>
            <a
              style={{ color: "#1E8406" }}
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
            >
              Can edit <Icon type="down" />
            </a>
          </span>
          <Divider type="vertical" />
        </>
      );
    }
  },
  {
    title: "Rush Option",
    dataIndex: "rushOption",
    render: rushOption => {
      return (
        <>
          <span style={{ color: "#007BFF" }}>
            <Icon theme="filled" filledColor="#1E8406" type="check-circle" />
            {rushOption}
          </span>
          <Divider type="vertical" />
        </>
      );
    }
  },
  {
    title: "Status",
    dataIndex: "status",
    render: status => {
      return (
        <>
          <span style={{ color: "#007BFF" }}>{`$${status}`}</span>
          <Divider type="vertical" />
        </>
      );
    }
  },
  {
    title: "Requested By",
    dataIndex: "requestedBy",
    render: requestedBy => {
      return (
        <>
          <span style={{ color: "#007BFF" }}>{requestedBy}</span>
          <div>
            <span style={{ color: "#C1C1C1" }}>Time Left</span>
            <span style={{ color: "#009B2A" }}>10:00:00</span>
          </div>
          <Divider type="vertical" />
        </>
      );
    }
  },
  {
    title: "Shipped or Picked Date",
    dataIndex: "shippedOrPickedDate",
    render: shippedOrPickedDate => {
      return (
        <>
          <span style={{ color: "#007BFF" }}>{`$${shippedOrPickedDate}`}</span>
          <Divider type="vertical" />
        </>
      );
    }
  }
];

const tableTwoCol = [
  {
    title: "Item #",
    dataIndex: "item"
  },
  {
    title: "Details",
    dataIndex: "details"
  },
  {
    title: "Production Type",
    dataIndex: "productionType"
  },
  {
    title: "Colors",
    dataIndex: "colors"
  },
  {
    title: "Quantity",
    dataIndex: "quantity"
  },
  {
    title: "Paid",
    dataIndex: "paid"
  }
];

const data = [];
for (let i = 0; i < 1; i++) {
  data.push({
    key: i,
    orderValue: "40,000",
    orderDate: "25 - June - 2017",
    deliveryMethod: "Pickup Order",
    rushOption: "Rush",
    status: "pending",
    requestedBy: "25 - June - 2017",
    shippedOrPickedDate: "25 - June - 2017"
  });
}

const dataTwo = [];
for (let i = 0; i < 1; i++) {
  dataTwo.push({
    key: i,
    item: `#232JODJSDKN${i + 2}`,
    details:
      "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
    productionType: "DTG Print",
    colors: "Royal",
    quantity: "L X 4",
    paid: "Paid in full"
  });
}

const dropDownMenu = () => (
  <Menu>
    <Menu.Item>
      <Link to="#/">Completed</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="#/">Not Completed</Link>
    </Menu.Item>
  </Menu>
);

const operations = (
  <div>
    <Dropdown overlay={dropDownMenu} trigger={["click"]}>
      <a style={{color: '#1E8406'}}>
        <span style={{ marginRight: "1rem" }}>
          Worksheet
          <Icon type="caret-down" />
        </span>
      </a>
    </Dropdown>
    <Button
      style={{ marginRight: "1rem", background: "#D0D0D0", color: "#ffffff" }}
    >
      Print
    </Button>
    <Button style={{ marginRight: "1rem" }}><Icon type="file-text" />Add Note</Button>
    <Dropdown overlay={dropDownMenu} trigger={["click"]}>
        <Button type="primary" style={{ marginRight: "1rem" }}>
          Complete Production
          <Icon type="caret-down" />
        </Button>
    </Dropdown>
  </div>
);

const ProductionDetails = () => {
  return (
    <>
      <div>
        <Link>
          <Icon type="arrow-left" />
          <span>Back |</span>
        </Link>
        <h2>Production House</h2>
      </div>
      <div>
        <Table
          // rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
      <div>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="Product Details" key="1">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h2>Product</h2>
              <Button type="default" style={{color: '#007bff'}}>Download ArtWork</Button>
            </div>
            <div >
              {imgUrl.map(img => (
                <img style={{width: '200px'}} key={img.key} src={img.url} />
              ))}
            </div>
            <div>
              <Table
                columns={tableTwoCol}
                dataSource={dataTwo}
                pagination={false}
              />
            </div>
          </TabPane>
          <TabPane tab="History/Notes" key="2"></TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ProductionDetails;
