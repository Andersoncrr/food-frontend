import { SettingOutlined } from "@ant-design/icons";
import { Button, Card, Collapse, CollapseProps, Form } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const ComplementsProduct = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Desea cubiertos",
      children: (
        <div>
          <ul>
            <li>si</li>
            <br />
            <li>No</li>
          </ul>
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "2",
      label: "Desea Servilletas",
      children: (
        <div>
          <ul>
            <li>si</li>
            <br />
            <li>No</li>
          </ul>
        </div>
      ),
      extra: genExtra(),
    },
    // {
    //   key: "2",
    //   label: "This is panel header 2",
    //   children: <div>{text}</div>,
    //   extra: genExtra(),
    // },
    // {
    //   key: "3",
    //   label: "This is panel header 3",
    //   children: <div>{text}</div>,
    //   extra: genExtra(),
    // },
  ];
  return (
    <Card title="Complementos del Nuevo Producto">
      <Collapse accordion onChange={onChange} items={items} />
      <Form.Item>
        <Button shape="round" type="primary" htmlType="submit">
          Crear Grupo
        </Button>
      </Form.Item>
    </Card>
  );
};
