export type RoaData = {
  total: number;
  data: Data;
};

export type Data = {
  tech: Tech;
  corporation: Corporation;
  industry: Industry;
};

export type Tech = [{ key: string; value: number }];

export type Corporation = [
  {
    key: string;
    value: number;
    code: string;
    industry: string[];
    tech: string[];
  }
];

export type Industry = [{ key: string; value: number }];
