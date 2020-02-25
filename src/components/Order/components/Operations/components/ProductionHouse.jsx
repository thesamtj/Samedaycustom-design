import React from "react";
import {
  Button,
  Col,
  Row,
  Input,
  Menu,
  Dropdown,
  Icon,
  Tabs,
  Table
} from "antd";
import { PAGINATION_CONFIG } from "../../constants";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";

const dropDownMenu = () => (
  <Menu>
    <Menu.Item>
      <Link to="#/">Completed</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="#/">Not Completed</Link>
    </Menu.Item>
  </Menu>
)

const columns = [
  {
    title: "Order #",
    dataIndex: "order"
  },
  {
    title: "Item #",
    dataIndex: "item"
  },
  {
    title: "Details",
    dataIndex: "details"
  },
  {
    title: "Colors",
    dataIndex: "colors"
  },
  {
    title: "Qty",
    dataIndex: "qty"
  },
  {
    title: "Print Type",
    dataIndex: "printType"
  },
  {
    title: "Delivery Method",
    dataIndex: "deliveryMethod",
    render: deliveryMethod => {
      let text;
      let color;
      if (deliveryMethod === 0) {
        text = "Push Shipping";
        color = "red";
      }
      if (deliveryMethod === 1) {
        text = "Pickup Order";
        color = "#196BD8";
      }

      return <span style={{ color: color }}>{text}</span>;
    }
  },
  {
    title: "Delivery Time",
    dataIndex: "deliveryTime",
    render: deliveryTime => {
      return (
        <>
          <span>23 - June - 2019</span>
          <div>
            <span style={{ color: "#C1C1C1" }}>Time Left</span>
            <span style={{ color: "#009B2A" }}>10:00:00</span>
          </div>
        </>
      );
    }
  },
  {
    title: "Production Status",
    dataIndex: "productionStatus",
    render: productionStatus => {
      return <span style={{ color: "#1E8406" }}>Running 2 of 5</span>;
    }
  }
];

const data = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    order: `#232JODJSDKN${i+2}`,
    item: "#232JODJSDKN2",
    details:
      "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
    colors: `London, Park Lane no. ${i}`,
    qty: "L X 4",
    printType: "DTG Print",
    deliveryMethod: i,
    deliveryTime: `London, Park Lane no. ${i}`,
    productionStatus: "Running 2 of 5"
  });
}


const { TabPane } = Tabs;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User",
    name: record.name
  })
};

const menu = (
  <Menu>
    <Menu.Item key="1">category 1</Menu.Item>
    <Menu.Item key="2">category 2</Menu.Item>
  </Menu>
);

const operations = (
  <div>
    <Button style={{marginRight: '1rem'}}>Print Worksheet</Button>
    <Dropdown
      overlay={dropDownMenu} trigger={['click']}
    >
          <span style={{marginRight: '1rem'}}>Mark as Completed<Icon type="caret-down" /></span>
    </Dropdown>
    <Button style={{marginRight: '1rem', background: '#D0D0D0', color: '#ffffff'}}>Save</Button>
  </div>
);

const ProductionHouse = () => {
  const history = useHistory();
  const handleRowClick = record => {
    console.log( record.key , 'row clicked')
    // return <Link to={'production/' + record.order} />
    history.push('dashboard/details')
  }
  return (
    <div>
      <div className="colm-flex">
        <h2>Production House</h2>
        <div className="colm-2">
          <Dropdown overlay={menu}>
            <Button className="btn--primary">
              Categories <Icon type="down" />
            </Button>
          </Dropdown>
          <Input
            size="small"
            prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </div>
      </div>

      <div>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="All Production" key="1">
            <Table
                onRow={ record => {
                    return {
                        onClick: () => {
                            handleRowClick(record)
                        }
                    }
                }}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                pagination={PAGINATION_CONFIG}
            />
          </TabPane>
          <TabPane tab="Awaiting Production" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Completed" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductionHouse;
