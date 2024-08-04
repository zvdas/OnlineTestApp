export interface QuizTable {
    title: string;
    data: object;
    columns: Array<{key: string, label: string}>;
    /*
    [
      {key: 'index', label: '#'},
      {key: 'question', label: 'Question'},
      {key: 'optionA', label: 'Option A'},
      {key: 'optionB', label: 'Option B'},
      {key: 'optionC', label: 'Option C'},
      {key: 'optionD', label: 'Option D'},
      {key: 'answer', label: 'Answer'},
      {key: 'action', label: 'Action'},
    ]
    */
}
