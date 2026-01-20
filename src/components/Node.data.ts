export type NodeType =
  | "EQUIPMENT_TYPE"
  | "EQUIPMENT"
  | "ASSEMBLY"
  | "COMPONENT";

export interface TreeNode {
  id: string;
  label: string;
  type: NodeType;
  children?: TreeNode[];
}

export const treeData: TreeNode = {
  id: "equipments",
  label: "Equipments",
  type: "EQUIPMENT_TYPE",
  children: [
    {
      id: "engine",
      label: "Engine",
      type: "EQUIPMENT",
      children: [
        {
          id: "main-engine",
          label: "Main Engine & Propulsion",
          type: "ASSEMBLY",
          children: [
            {
              id: "propeller",
              label: "Propeller",
              type: "COMPONENT",
              children: [
                {
                  id: "propeller-blade",
                  label: "Propeller Blade",
                  type: "COMPONENT"
                },
                {
                  id: "propeller-hub",
                  label: "Propeller Hub",
                  type: "COMPONENT"
                }
              ]
            },
            {
              id: "shafting",
              label: "Shafting",
              type: "COMPONENT",
              children: [
                {
                  id: "shaft-coupling",
                  label: "Shaft Coupling",
                  type: "COMPONENT"
                },
                {
                  id: "stern-tube",
                  label: "Stern Tube",
                  type: "COMPONENT"
                }
              ]
            }
          ]
        },
        {
          id: "aux-engine",
          label: "Auxiliary Engine",
          type: "ASSEMBLY",
          children: [
            {
              id: "fuel-system",
              label: "Fuel System",
              type: "COMPONENT",
              children: [
                {
                  id: "fuel-pump",
                  label: "Fuel Pump",
                  type: "COMPONENT"
                },
                {
                  id: "fuel-filter",
                  label: "Fuel Filter",
                  type: "COMPONENT"
                }
              ]
            },
            {
              id: "cooling-system",
              label: "Cooling System",
              type: "COMPONENT",
              children: [
                {
                  id: "heat-exchanger",
                  label: "Heat Exchanger",
                  type: "COMPONENT"
                },
                {
                  id: "cooling-pump",
                  label: "Cooling Pump",
                  type: "COMPONENT"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "electrical",
      label: "Electrical System",
      type: "EQUIPMENT",
      children: [
        {
          id: "generator",
          label: "Generator",
          type: "ASSEMBLY",
          children: [
            {
              id: "alternator",
              label: "Alternator",
              type: "COMPONENT",
              children: [
                {
                  id: "rotor",
                  label: "Rotor",
                  type: "COMPONENT"
                },
                {
                  id: "stator",
                  label: "Stator",
                  type: "COMPONENT"
                }
              ]
            },
            {
              id: "control-panel",
              label: "Control Panel",
              type: "COMPONENT",
              children: [
                {
                  id: "voltage-regulator",
                  label: "Voltage Regulator",
                  type: "COMPONENT"
                },
                {
                  id: "breaker-unit",
                  label: "Breaker Unit",
                  type: "COMPONENT"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};