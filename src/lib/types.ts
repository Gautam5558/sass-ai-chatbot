export type PlanData = {
  title: string;
  description: string;
  price: number;
  buttonText: string;
  features: { name: string; isAvailable: boolean }[];
};
