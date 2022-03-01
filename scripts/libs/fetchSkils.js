class FetchSkils {
  constructor(url = "https://api.github.com/users/yuy5719823/repos") {
    this.url = url;
  }

  async fetchData() {
    const fetchData = await fetch("https://api.github.com/users/yuy5719823/repos").then((res) => res.json());
    const languageArry = fetchData.map((data) => data.language);
    return this._countLanguage(languageArry);
  }

  //[ruby, ruby, java ...] =>
  //[ {id: 1, language: ruby, count: 2}, {id: 2, language: java, count: 1}...]
  _countLanguage(languageList) {
    const notNullLanguageList = languageList.filter((language) => language != null);
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map((data, index) => {
      return {
        id: index,
        language: data,
        count: languageList.filter((language) => language === data).length,
      };
    });
  }
}
