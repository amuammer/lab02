const keywordSet = new Set();

$.get("data/page-1.json")
.then((data) => {
  data.forEach(({ image_url, title, description, keyword, horns }) => {
    const image = new Image(image_url, title, description, keyword, horns);
    image.render();
    keywordSet.add(keyword);
  });
}).then(() => {
  // remove the template after render all of items
  $("#template").remove();
}).then(() => {
  // render options set
  keywordSet.forEach((keyword) => {
    $("select").append(`<option>${keyword}</option>`)
  })
})

$("select").change((option) => {
  const selectedKeyword = option.target.value;
  if (selectedKeyword !== "default") {
    // hide all elements
    $(".Image").hide();
    $(`.${selectedKeyword}`).show();
  } else {
    $(".Image").show();
  }
})
