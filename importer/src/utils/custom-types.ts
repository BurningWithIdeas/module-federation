interface State {
  template: TemplateState;
}

interface TemplateState {
  templateArr: TemplateArr;
}

type TemplateArr = Array<TemplateItem>;

interface TemplateItem {
  id: number;
}
//Actions

interface Action {
  type: string;
  payload: {
    id?: number;
  };
}

interface ProductActions {
  templateAction?(id: number): void;
}

//Props

interface TemplateItemComp {
  templateArr: TemplateArr;
  templateAction(id: number): void;
}
