// Image mappings for Cloudinary migration
// Format: local_path -> cloudinary_public_id

export const IMAGE_MAPPINGS = {
  // Logo
  '/icons/logo.png': 'logo_l6diqm',
  '/icons/logo.svg': 'logo_sjyhnm',

  // QuickLinks
  '/images/quicklinks/staff.png': 'staff_ggflz5',
  '/images/quicklinks/projects.png': 'projects_nf95wb',


  // Industries
  '/icons/industries/supply-chain.svg': 'supply-chain_rna6up',
  '/icons/industries/healthcare.svg': 'healthcare_hiyd5w',
  '/icons/industries/education.svg': 'education_wlglkq',
  '/icons/industries/real-estate.svg': 'real-estate_dvdfot',
  '/icons/industries/ecommerce.svg': 'ecommerce_hne2kc',
  '/icons/industries/finance.svg': 'finance_bu86us',
  '/icons/industries/entertainment.svg': 'entertainment_cjbgpk',
  '/icons/industries/legal.svg': 'legal_dwvmfx',
  '/icons/industries/government.svg': 'government_ircjfn',
  '/icons/industries/oil-gas.svg': 'oil-gas_ja2jue',

  // Tools - Frontend
  '/icons/tools/react.svg': 'react_rtwefr',
  '/icons/tools/nextjs.svg': 'nextjs_quxhnt',
  '/icons/tools/typescript.svg': 'typescript_kec2ri',
  '/icons/tools/tailwind.svg': 'tailwind_fm3rtf',
  '/icons/tools/css3.svg': 'css3_lozlkw',
  '/icons/tools/html5.svg': 'html5_dyb2ag',

  // Tools - Backend
  '/icons/tools/nodejs.svg': 'nodejs_sfkaiv',
  '/icons/tools/nestjs.svg': 'nestjs_icognl',
  '/icons/tools/express.svg': 'express_idk5dp',
  '/icons/tools/python.svg': 'python_o8juze',
  '/icons/tools/go.svg': 'go_mizuhv',
  '/icons/tools/java.svg': 'java_jxpzcu',

  // Tools - Databases
  '/icons/tools/postgres.svg': 'postgres_zhjpfc',
  '/icons/tools/mysql.svg': 'mysql_l72zhk',
  '/icons/tools/mongodb.svg': 'mongodb_e9ppnt',
  '/icons/tools/redis.svg': 'redis_npdadb',
  '/icons/tools/sqlite.svg': 'sqlite_sjq9oq',
  '/icons/tools/elastic.svg': 'elastic_ymzw0p',

  // Tools - Mobile
  '/icons/tools/reactnative.svg': 'reactnative_dgpeib',
  '/icons/tools/flutter.svg': 'flutter_e251jk',
  '/icons/tools/swift.svg': 'swift_gsqfrc',
  '/icons/tools/kotlin.svg': 'kotlin_zzsj7p',
  '/icons/tools/ionic.svg': 'ionic_yjbmpc',
  '/icons/tools/xamarin.svg': 'xamarin_kjik1z',

  // Tools - Blockchain
  '/icons/tools/solidity.svg': 'solidity_pb382k',
  '/icons/tools/hardhat.svg': 'hardhat_ffq4wp',
  '/icons/tools/foundry.svg': 'foundry_ch3nk9',
  '/icons/tools/ethereum.svg': 'ethereum_quwbbe',
  '/icons/tools/linea.svg': 'linea_c30bsb',
  '/icons/tools/ipfs.svg': 'ipfs_rcyu9z',

  // Tools - Emerging Tech
  '/icons/tools/ai-python.svg': 'ai-python_gjjhg0',
  '/icons/tools/openai.svg': 'openai_ta6izn',
  '/icons/tools/langchain.svg': 'langchain_oiu309',
  '/icons/tools/vercelai.svg': 'vercelai_hh5ame',
  '/icons/tools/supabase.svg': 'supabase_olrehq',
  '/icons/tools/trpc.svg': 'trpc_mcl6fs',



  // Videos
  '/images/blockchain-technology.mp4': 'blockchain-technology_esgq4m',
  '/images/AI-futuristic.mp4': 'AI-futuristic_l6g2e4',
  '/images/cyber-code-world.mp4': 'cyber-code-world_wwwlaz',

  // Testimonials
  '/images/testimonials/priya.png': 'priya_fxjhiq',
  '/images/testimonials/rohit.png': 'rohit_wog8m7',
  '/images/testimonials/ananya.png': 'ananya_cjctp5',
  '/images/testimonials/1.webp': '1_sfyyyf',
  '/images/testimonials/2.webp': '2_wo0iif',
  '/images/testimonials/3.webp': '3_jo3x43',
  '/images/testimonials/4.webp': '4_zrqouc',
} as const;

export type LocalImagePath = keyof typeof IMAGE_MAPPINGS;
export type CloudinaryPublicId = typeof IMAGE_MAPPINGS[LocalImagePath];