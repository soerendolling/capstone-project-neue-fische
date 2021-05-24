export function ambienceFilter(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    const elegant = filters.ambience?.includes("elegant");
    const cosy = filters.ambience?.includes("cosy");
    const modern = filters.ambience?.includes("modern");
    const busy = filters.ambience?.includes("busy");
    const traditional = filters.ambience?.includes("traditional");
    const trendy = filters.ambience?.includes("trendy");
    const rustic = filters.ambience?.includes("rustic");
    const alternative = filters.ambience?.includes("alternative");
    const warm = filters.ambience?.includes("warm");
    const hanseatic = filters.ambience?.includes("hanseatic");

    const filterElegant = restaurant.ambience.includes("elegant") === true;
    const filterCosy = restaurant.ambience.includes("cosy");
    const filterModern = restaurant.ambience.includes("modern");
    const filterBusy = restaurant.ambience.includes("busy");
    const filterTraditional = restaurant.ambience.includes("traditional");
    const filterTrendy = restaurant.ambience.includes("trendy");
    const filterRustic = restaurant.ambience.includes("rustic");
    const filterAlternative = restaurant.ambience.includes("alternative");
    const filterWarm = restaurant.ambience.includes("warm");
    const filterHanseatic = restaurant.ambience.includes("hanseatic");

    if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return restaurant;
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm
    ) {
      return (
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      traditional &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      busy &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      modern &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      cosy &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm
    ) {
      return (
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm
      );
    } else if (
      cosy &&
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative
      );
    } else if (elegant && cosy && modern && busy && traditional && trendy) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy
      );
    } else if (elegant && cosy && modern && busy && traditional && hanseatic) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterHanseatic
      );
    } else if (elegant && cosy && modern && busy && warm && hanseatic) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterWarm ||
        filterHanseatic
      );
    } else if (elegant && cosy && modern && alternative && warm && hanseatic) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (elegant && cosy && rustic && alternative && warm && hanseatic) {
      return (
        filterElegant ||
        filterCosy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      elegant &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterElegant ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (
      traditional &&
      trendy &&
      rustic &&
      alternative &&
      warm &&
      hanseatic
    ) {
      return (
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (busy && traditional && trendy && rustic && alternative && warm) {
      return (
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm
      );
    } else if (
      modern &&
      busy &&
      traditional &&
      trendy &&
      rustic &&
      alternative
    ) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative
      );
    } else if (cosy && modern && busy && traditional && trendy && rustic) {
      return (
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic
      );
    } else if (elegant && cosy && modern && busy && traditional) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional
      );
    } else if (elegant && cosy && modern && busy && hanseatic) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterHanseatic
      );
    } else if (elegant && cosy && modern && warm && hanseatic) {
      return (
        filterElegant ||
        filterCosy ||
        filterModern ||
        filterWarm ||
        filterHanseatic
      );
    } else if (elegant && cosy && alternative && warm && hanseatic) {
      return (
        filterElegant ||
        filterCosy ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (elegant && rustic && alternative && warm && hanseatic) {
      return (
        filterElegant ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (trendy && rustic && alternative && warm && hanseatic) {
      return (
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm ||
        filterHanseatic
      );
    } else if (traditional && trendy && rustic && alternative && warm) {
      return (
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative ||
        filterWarm
      );
    } else if (busy && traditional && trendy && rustic && alternative) {
      return (
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic ||
        filterAlternative
      );
    } else if (modern && busy && traditional && trendy && rustic) {
      return (
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy ||
        filterRustic
      );
    } else if (cosy && modern && busy && traditional && trendy) {
      return (
        filterCosy ||
        filterModern ||
        filterBusy ||
        filterTraditional ||
        filterTrendy
      );
    } else if (elegant && cosy && modern && busy) {
      return filterElegant || filterCosy || filterModern || filterBusy;
    } else if (elegant && cosy && modern && hanseatic) {
      return filterElegant || filterCosy || filterModern || filterHanseatic;
    } else if (elegant && cosy && warm && hanseatic) {
      return filterElegant || filterCosy || filterWarm || filterHanseatic;
    } else if (elegant && alternative && warm && hanseatic) {
      return (
        filterElegant || filterAlternative || filterWarm || filterHanseatic
      );
    } else if (rustic && alternative && warm && hanseatic) {
      return filterRustic || filterAlternative || filterWarm || filterHanseatic;
    } else if (trendy && rustic && alternative && warm) {
      return filterTrendy || filterRustic || filterAlternative || filterWarm;
    } else if (traditional && trendy && rustic && alternative) {
      return (
        filterTraditional || filterTrendy || filterRustic || filterAlternative
      );
    } else if (busy && traditional && trendy && rustic) {
      return filterBusy || filterTraditional || filterTrendy || filterRustic;
    } else if (modern && busy && traditional && trendy) {
      return filterModern || filterBusy || filterTraditional || filterTrendy;
    } else if (cosy && modern && busy && traditional) {
      return filterCosy || filterModern || filterBusy || filterTraditional;
    } else if (elegant && cosy && modern) {
      return filterElegant || filterCosy || filterModern;
    } else if (elegant && cosy && hanseatic) {
      return filterElegant || filterCosy || filterHanseatic;
    } else if (elegant && warm && hanseatic) {
      return filterElegant || filterWarm || filterHanseatic;
    } else if (alternative && warm && hanseatic) {
      return filterAlternative || filterWarm || filterHanseatic;
    } else if (rustic && alternative && warm) {
      return filterRustic || filterAlternative || filterWarm;
    } else if (trendy && rustic && alternative) {
      return filterTrendy || filterRustic || filterAlternative;
    } else if (traditional && trendy && rustic) {
      return filterTraditional || filterTrendy || filterRustic;
    } else if (busy && traditional && trendy) {
      return filterBusy || filterTraditional || filterTrendy;
    } else if (modern && busy && traditional) {
      return filterModern || filterBusy || filterTraditional;
    } else if (cosy && modern && busy) {
      return filterCosy || filterModern || filterBusy;
    } else if (elegant && cosy) {
      return filterElegant || filterCosy;
    } else if (elegant && modern) {
      return filterElegant || filterModern;
    } else if (elegant && busy) {
      return filterElegant || filterBusy;
    } else if (elegant && traditional) {
      return filterElegant || filterTraditional;
    } else if (elegant && trendy) {
      return filterElegant || filterTrendy;
    } else if (elegant && rustic) {
      return filterElegant || filterRustic;
    } else if (elegant && alternative) {
      return filterElegant || alternative;
    } else if (elegant && warm) {
      return filterElegant || filterWarm;
    } else if (elegant && hanseatic) {
      return filterElegant || filterHanseatic;
    } else if (modern && cosy) {
      return filterModern || filterCosy;
    } else if (modern && busy) {
      return filterModern || filterBusy;
    } else if (modern && traditional) {
      return filterModern || filterTraditional;
    } else if (modern && trendy) {
      return filterModern || filterTrendy;
    } else if (modern && rustic) {
      return filterModern || filterRustic;
    } else if (modern && alternative) {
      return filterModern || filterAlternative;
    } else if (modern && warm) {
      return filterModern || filterWarm;
    } else if (modern && hanseatic) {
      return filterModern || filterHanseatic;
    } else if (cosy && busy) {
      return filterCosy || filterBusy;
    } else if (cosy && traditional) {
      return filterCosy || filterTraditional;
    } else if (cosy && trendy) {
      return filterCosy || filterTrendy;
    } else if (cosy && rustic) {
      return filterCosy || filterRustic;
    } else if (cosy && alternative) {
      return filterCosy || filterAlternative;
    } else if (cosy && warm) {
      return filterCosy || filterWarm;
    } else if (cosy && hanseatic) {
      return filterCosy || filterHanseatic;
    } else if (busy && traditional) {
      return filterBusy || filterTraditional;
    } else if (busy && trendy) {
      return filterBusy || filterTrendy;
    } else if (busy && rustic) {
      return filterBusy || filterRustic;
    } else if (busy && alternative) {
      return filterBusy || filterAlternative;
    } else if (busy && warm) {
      return filterBusy || filterWarm;
    } else if (busy && hanseatic) {
      return filterBusy || filterHanseatic;
    } else if (traditional && trendy) {
      return filterTraditional || filterTrendy;
    } else if (traditional && rustic) {
      return filterTraditional || filterRustic;
    } else if (traditional && alternative) {
      return filterTraditional || filterAlternative;
    } else if (traditional && trendy) {
      return filterTraditional || filterTrendy;
    } else if (traditional && rustic) {
      return filterTraditional || filterRustic;
    } else if (traditional && alternative) {
      return filterTraditional || filterAlternative;
    } else if (traditional && warm) {
      return filterTraditional || filterWarm;
    } else if (traditional && hanseatic) {
      return filterTraditional || filterHanseatic;
    } else if (trendy || rustic) {
      return filterTrendy || filterRustic;
    } else if (trendy || alternative) {
      return filterTrendy || filterAlternative;
    } else if (trendy || warm) {
      return filterTrendy || filterWarm;
    } else if (trendy || hanseatic) {
      return filterTrendy || filterHanseatic;
    } else if (rustic || alternative) {
      return filterRustic || filterAlternative;
    } else if (rustic || warm) {
      return filterRustic || filterWarm;
    } else if (rustic || hanseatic) {
      return filterRustic || filterHanseatic;
    } else if (alternative && warm) {
      return filterAlternative || filterWarm;
    } else if (alternative && hanseatic) {
      return filterAlternative || filterHanseatic;
    } else if (warm && hanseatic) {
      return filterWarm || filterHanseatic;
    } else if (elegant) {
      return filterElegant;
    } else if (cosy) {
      return filterCosy;
    } else if (modern) {
      return filterModern;
    } else if (busy) {
      return filterBusy;
    } else if (traditional) {
      return filterTraditional;
    } else if (trendy) {
      return filterTrendy;
    } else if (rustic) {
      return filterRustic;
    } else if (alternative) {
      return filterAlternative;
    } else if (warm) {
      return filterWarm;
    } else if (hanseatic) {
      return filterHanseatic;
    }
    return true;
  });
}
