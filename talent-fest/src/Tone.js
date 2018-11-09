var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: 'DXnguc0TPIbu5laENNgnNUoOaAUXgb1zErUN_KqMHqGc',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21'
});

var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

var languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  iam_apikey: 'oM_wgsnP-pbQj8_hM5oUZJQH_KwHT657WhlO69Eler0I',
  url: 'https://gateway.watsonplatform.net/language-translator/api'
});


function translation(text, callback) {
  var parameters = {
    text: text,
    model: 'en-us',
    source: 'pt-br',
    target: 'en-us'
  };
  languageTranslator.translate(
    parameters,
    function (error, response) {
      
      if (error){
        console.log(error)
        callback(error, null)
      }
      else {
        //console.log(JSON.stringify(response, null, 2));
        const texto = JSON.stringify(response.translations[0].translation, null, 2);
        let x = analyse(texto);
        callback(null, x)
      }

    }
  );
}

function analyse(texto) {
  var toneParams = {
    tone_input: { 'text': texto },
    content_type: 'application/json',
    accept_language: 'pt-br'
  };

  toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
    if (error) {
      console.log(error)
    } else {
      return (toneAnalysis.document_tone.tones);
    }
  })
}

module.exports = translation