import React from "react";
import ReactDOM from "react-dom";
import MUIRichTextEditor from "mui-rte";
import { Typography } from "@material-ui/core";
import { getData, convertFromRaw, convertToRaw } from "draft-js";
import TableChartIcon from "@material-ui/icons/TableChart";

const MyBlock = (props) => {
  props.children.map((i) => {
    console.log(i.props.children.getText());
  });
  return (
    <Typography
      style={{
        padding: 10,
        backgroundColor: "#ebebeb"
      }}
    >
      My Block content is:
      {props.children}
    </Typography>
  );
};

const save = (data) => {
  console.log(data);
  convertFromRaw(JSON.parse(data))
    .getBlocksAsArray()
    .map((block) => {
      console.info("block: ", block);
      console.log(block.getData());
    });
};

ReactDOM.render(
  <>
    <MUIRichTextEditor
      controls={["my-block"]}
      customControls={[
        {
          name: "my-block",
          icon: <TableChartIcon />,
          type: "block",
          blockWrapper: <MyBlock />
        }
      ]}
      label="Type something here..."
      onSave={save}
      inlineToolbar={true}
    />
  </>,
  document.getElementById("root")
);
