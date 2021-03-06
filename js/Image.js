function Image(image_url, title, description, keyword, horns){
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    Image.Array.push(this);
}

Image.Array = [];

Image.prototype.render = function () {
  const template = $("#template").clone();
  template.removeAttr("id");
  template.addClass(this.keyword);
  template.find("img").attr("src",  this.image_url);
  template.find(".desc").text(this.description);
  $("#divContainer").append(template);
}


Image.prototype.toHtml = function () {
  let mustachTemplate = $("#image-template").html();
  let newObject = Mustache.render(mustachTemplate, this);
  $("#divContainer").append(newObject);
}
