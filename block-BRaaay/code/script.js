let root = document.getElementById("root");

fetch("./colors.json")
  .then((response) => response.json())
  .then((data) => {
    ReactDOM.render(<Colors colorsData = {data} />, root);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function Colors(props) {
    const {colorsData} = props;
    return (
        Object.keys(colorsData).map((color) => {
            return (
                <section key = {color}>
                    <aside>{color}</aside>
                    <div className = "container">
                    {
                    colorsData[color].map((shade) => {
                        return (
                        <div className = "box" key = {shade} style = {{
                            backgroundColor: shade,
                        }}></div>
                        )
                    })
                    }
                    </div>
                </section>
            )
        })
    );
}
