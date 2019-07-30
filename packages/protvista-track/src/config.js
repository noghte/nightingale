export const config = {
  CHAIN: {
    name: "chain",
    label: "Chain",
    tooltip:
      "(aka mature region). This describes the extent of a polypeptide chain in the mature protein following processing",
    shape: "rectangle",
    color: "#CC9933"
  },
  TRANSIT: {
    name: "transit peptide",
    label: "Transit peptide",
    tooltip: "This describes the extent of a transit peptide",
    shape: "rectangle",
    color: "#009966"
  },
  INIT_MET: {
    name: "initiator methionine",
    label: "Initiator methionine",
    tooltip:
      "This indicates that the initiator methionine is cleaved from the mature protein",
    shape: "arrow",
    color: "#996633"
  },
  PROPEP: {
    name: "propeptide",
    label: "Propeptide",
    tooltip:
      "Part of a protein that is cleaved during maturation or activation",
    shape: "rectangle",
    color: "#99CCCC"
  },
  PEPTIDE: {
    name: "peptide",
    label: "Peptide",
    tooltip:
      "The position and length of an active peptide in the mature protein",
    shape: "rectangle",
    color: "#006699"
  },
  SIGNAL: {
    name: "signal peptide",
    label: "Signal peptide",
    tooltip: "N-terminal signal peptide",
    shape: "rectangle",
    color: "#CC0033"
  },
  HELIX: {
    name: "helix",
    label: "Helix",
    tooltip: "The positions of experimentally determined helical regions",
    shape: "rectangle",
    color: "#FF0066"
  },
  STRAND: {
    name: "strand",
    label: "Beta strand",
    tooltip: "The positions of experimentally determined beta strands",
    shape: "rectangle",
    color: "#FFCC00"
  },
  TURN: {
    name: "turn",
    label: "Turn",
    tooltip: "The positions of experimentally determined hydrogen-bonded turns",
    shape: "rectangle",
    color: "#0571AF"
  },
  DISULFID: {
    name: "disulfide bond",
    label: "Disulfide bond",
    tooltip:
      "The positions of cysteine residues participating in disulphide bonds",
    shape: "bridge",
    color: "#23B14D"
  },
  CROSSLNK: {
    name: "cross-link",
    label: "Cross-link",
    tooltip:
      "Covalent linkages of various types formed between two proteins or between two parts of the same protein",
    shape: "bridge",
    color: "#FF6600"
  },
  REGION: {
    name: "region of interest",
    label: "Region of interest",
    tooltip:
      "Regions in multifunctional enzymes or fusion proteins, or characteristics of a region, e.g., protein-protein interactions mediation",
    shape: "rectangle",
    color: "#B33E00"
  },
  COILED: {
    name: "coiled-coil region",
    label: "Coiled-coil region",
    tooltip:
      "Coiled coils are built by two or more alpha-helices that wind around each other to form a supercoil",
    shape: "rectangle",
    color: "#006699"
  },
  MOTIF: {
    name: "short sequence motif",
    label: "Short sequence motif",
    tooltip: "Short conserved sequence motif of biological significance",
    shape: "rectangle",
    color: "#402060"
  },
  REPEAT: {
    name: "repeat",
    label: "Repeat",
    tooltip: "Repeated sequence motifs or repeated domains within the protein",
    shape: "rectangle",
    color: "#9900FF"
  },
  CA_BIND: {
    name: "calcium-binding region",
    label: "Calcium-binding region",
    tooltip: "Calcium-binding regions, such as the EF-hand motif",
    shape: "rectangle",
    color: "#FF3399"
  },
  DNA_BIND: {
    name: "DNA-binding region",
    label: "DNA binding",
    tooltip:
      "DNA-binding domains such as AP2/ERF domain, the ETS domain, the Fork-Head domain, the HMG box and the Myb domain",
    shape: "rectangle",
    color: "#009933"
  },
  DOMAIN: {
    name: "other domain of interest",
    label: "Other domain of interest",
    tooltip:
      "Specific combination of secondary structures organized into a characteristic three-dimensional structure or fold",
    shape: "rectangle",
    color: "#9999FF"
  },
  ZN_FING: {
    name: "zinc finger region",
    label: "Zinc finger",
    tooltip:
      "Small, functional, independently folded domain that coordinates one or more zinc ions",
    shape: "rectangle",
    color: "#990066"
  },
  NP_BIND: {
    name: "nucleotide-binding region",
    label: "Nucleotide-binding region",
    tooltip:
      "(aka flavin-binding). Region in the protein which binds nucleotide phosphates",
    shape: "rectangle",
    color: "#FF9900"
  },
  METAL: {
    name: "metal ion-binding site",
    label: "Metal ion-binding site",
    tooltip: "Binding site for a metal ion",
    shape: "diamond",
    color: "#009900"
  },
  SITE: {
    name: "other site of interest",
    label: "Other site of interest",
    tooltip: "Any interesting single amino acid site on the sequence",
    shape: "chevron",
    color: "#660033"
  },
  BINDING: {
    name: "other binding site",
    label: "Other binding site",
    tooltip:
      "Binding site for any chemical group (co-enzyme, prosthetic group, etc.)",
    shape: "rectangle",
    color: "#catFace"
  },
  ACT_SITE: {
    name: "active site",
    label: "Active site",
    tooltip: "Amino acid(s) directly involved in the activity of an enzyme",
    shape: "circle",
    color: "#FF6666"
  },
  MOD_RES: {
    name: "Post-translationally modified residue",
    label: "Modified residue",
    tooltip:
      "Modified residues such as phosphorylation, acetylation, acylation, methylation",
    shape: "triangle",
    color: "#000066"
  },
  LIPID: {
    name: "lipid moiety-binding region",
    label: "Lipidation",
    tooltip: "Covalently attached lipid group(s)",
    shape: "wave",
    color: "#99CC33"
  },
  CARBOHYD: {
    name: "glycosylation site",
    label: "Glycosylation",
    tooltip: "Covalently attached glycan group(s)",
    shape: "hexagon",
    color: "#CC3366"
  },
  COMPBIAS: {
    name: "compositionally biased region",
    label: "Compositionally biased region",
    tooltip:
      "Position of regions of compositional bias within the protein and the particular amino acids that are over-represented within those regions",
    shape: "rectangle",
    color: "#FF3366"
  },
  CONFLICT: {
    name: "sequence conflict",
    label: "Sequence conflict",
    tooltip: "Sequence discrepancies of unknown origin",
    shape: "rectangle",
    color: "#6633CC"
  },
  NON_CONS: {
    name: "non-consecutive residues",
    label: "Non-adjacent residues",
    tooltip:
      "Indicates that two residues in a sequence are not consecutive and that there is an undetermined number of unsequenced residues between them",
    shape: "doubleBar",
    color: "#FF0033"
  },
  NON_TER: {
    name: "non-terminal residue",
    label: "Non-terminal residue",
    tooltip:
      "The sequence is incomplete. The residue is not the terminal residue of the complete protein",
    shape: "doubleBar",
    color: "#339933"
  },
  UNSURE: {
    name: "unsure residue",
    label: "Sequence uncertainty",
    tooltip:
      "Regions of a sequence for which the authors are unsure about the sequence assignment",
    shape: "rectangle",
    color: "#33FF00"
  },
  NON_STD: {
    name: "non-standard amino acid",
    label: "Non-standard residue",
    tooltip: "Non-standard amino acids (selenocysteine and pyrrolysine)",
    shape: "pentagon",
    color: "#330066"
  },
  MUTAGEN: {
    name: "mutagenesis site",
    label: "Mutagenesis",
    tooltip: "Site which has been experimentally altered by mutagenesis",
    shape: "rectangle",
    color: "#FF9900"
  },
  TOPO_DOM: {
    name: "topological domain",
    label: "Topological domain",
    tooltip: "Location of non-membrane regions of membrane-spanning proteins",
    shape: "rectangle",
    color: "#CC0000"
  },
  TRANSMEM: {
    name: "transmembrane region",
    label: "Transmembrane",
    tooltip: "Extent of a membrane-spanning region",
    shape: "rectangle",
    color: "#CC00CC"
  },
  INTRAMEM: {
    name: "intramembrane region",
    label: "Intramembrane",
    tooltip: "Extent of a region located in a membrane without crossing it",
    shape: "rectangle",
    color: "#0000CC"
  },
  VAR_SEQ: {
    name: "splice variant",
    label: "Splice variant",
    tooltip: "",
    shape: "rectangle",
    color: "#CC11CC"
  },
  VARIANT: {
    name: "sequence variant",
    label: "Natural variant",
    tooltip:
      "Natural variant of the protein, including polymorphisms, variations between strains, isolates or cultivars, disease-associated mutations and RNA editing events",
    shape: "circle",
    color: "black"
  },
  UNIQUE: {
    name: "unique",
    label: "Unique peptide",
    tooltip: "",
    shape: "rectangle",
    color: "#fc3133"
  },
  NON_UNIQUE: {
    name: "non-unique",
    label: "Non-unique peptide",
    tooltip: "",
    shape: "rectangle",
    color: "#8585fc"
  },
  ANTIGEN: {
    name: "antigen",
    label: "Antibody binding sequences",
    tooltip: "",
    shape: "rectangle",
    color: "#996699"
  },
  PDBE_COVER: {
    name: "pdbe coverage",
    label: "PDBe 3D structure coverage",
    tooltip: "",
    shape: "rectangle",
    color: "#669966"
  }
};
