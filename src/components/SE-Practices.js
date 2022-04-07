import articles from "../dummydata/articles.js";
import Styles from "./tablestyle.js";
import Table from "./evidencetable";
import tablecolumns from "./tablecolumns.js";

const SEPractice = () => {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
    </div>
  );
};
export default SEPractice;
