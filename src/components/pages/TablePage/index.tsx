import { useAppDispatch, useAppSelector } from "@/hooks";
import { getTablesByIdUser } from "@/store/TableSlice/actions/getTablesByIdUser";
import { Card } from "antd";
import { useEffect } from "react";

export const TablePage = () => {
  const dispatch = useAppDispatch();

  const { tables } = useAppSelector((state) => state.table);

  console.log("tables", tables);

  useEffect(() => {
    dispatch(getTablesByIdUser());
  }, []);

  return (
    <div>
      Mesas
      {tables.map((table) => (
        <Card style={{ width: "100px" }}>
          <p>{table.number}</p>
          <p>{table.capacity}</p>
        </Card>
      ))}
    </div>
  );
};
