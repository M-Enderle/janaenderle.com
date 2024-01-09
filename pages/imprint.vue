<template>
  <div class="imprint">
    <h1>Imprint</h1>
    <div class="thirds">
      <div class="third">
        <p>Adresse</p>
        <br>
        <p>Studio Rotstich<br></p>
        <p>Jana Enderle<br></p>
        <p>Olbersstraße 4<br></p>
        <p>10589 Berlin Charlottenburg<br><br></p>
        <p>E-Mail: <a href="mailto:hello@janaenderle.com">hello@janaenderle.com</a></p>
      </div>
      <div class="third">
        <p>Haftungsausschluss<br><br></p>
        <p>§ 1 Haftungsbeschränkung<br></p>
        <p>Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.<br><br></p>
        <p>§ 2 Externe Links<br></p>
        <p>Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.<br><br></p>
      </div>
      <div class="third">
        <p>§ 3 Urheber- und Leistungsschutzrechte<br></p>
        <p>Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p><br><br>
        <p>§ 4 Besondere Nutzungsbedingungen<br></p>
        <p>Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  
  setup() {

    const { locale, locales, t } = useI18n()

    definePageMeta({
      title: 'pages.titles.imprint',
      description: 'SEO.imprint',
    })

    return {
        t
    }
  },
}
</script>

<style lang="scss">
  

  .third {
    display: block;
    hyphens: auto;
  }

  .imprint div {
    font-size: 16px;
  }

  .imprint h1 {
    font-size: 100px;
    font-weight: 400;
    margin: 30px 0;
    line-height: 110%;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 768px) {
    .thirds {
      display: grid;
      grid-template-columns: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .thirds {
      display: grid;
      grid-template-columns: 32.66% 32.66% 32.66%;
      grid-gap: 1%;
    }
  }

</style>