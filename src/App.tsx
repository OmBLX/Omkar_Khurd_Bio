import { useState } from 'react';
import { Globe } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'english' | 'marathi'>('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'marathi' : 'english');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={toggleLanguage}
          className="mb-4 flex items-center gap-2 px-4 py-2 bg-white border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors print:hidden"
        >
          <Globe size={20} />
          {language === 'english' ? 'Switch to Marathi' : 'Switch to English'}
        </button>

        {language === 'english' ? <EnglishBiodata /> : <MarathiBiodata />}
      </div>
    </div>
  );
}

function EnglishBiodata() {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden border-4 border-orange-600">
      <div className="border-b-4 border-orange-600 bg-gradient-to-r from-orange-100 to-red-100 p-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-800 mb-4">
            // Shree Ganeshay Namah //
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center text-4xl">
              ॐ
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-orange-700">
            <div>// Shree Mallikarjun Prasanna //</div>
            <div>// Shree Virbhadra Prasanna //</div>
            <div>// Shree Mahalakshmi Prasanna //</div>
            <div>// Shree Banashankari Prasanna //</div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 border-b-2 border-orange-300 pb-4">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          <InfoRow label="Name" value="Mr. Omkar Sunil Khurd" />
          <InfoRow label="Mobile No." value="7387748890" />
          <InfoRow label="Date of Birth" value="06/09/1999" />
          <InfoRow label="Birth Day" value="Monday" />
          <InfoRow label="Birth Time" value="Morning 8:45" />
          <InfoRow label="Zodiac Sign" value="Cancer (Kark)" />
          <InfoRow label="Blood Group" value="O Positive" />
          <InfoRow label="Nakshatra" value="Punarvasu" />
          <InfoRow label="Gana" value="Dev" />
          <InfoRow label="Height" value="5 ft 6 inches" />
          <InfoRow label="Nickname" value="Hindurao" />
          <InfoRow label="Cast" value="Lingayat - Shilwant" />
        </div>

        <div className="mb-8">
          <InfoRow label="Birthplace" value="Mangaon, Tal. Hatkanangale, Dist. Kolhapur" fullWidth />
          <InfoRow label="Family Deity" value="Shree Virbhadra / Banashankari" fullWidth />
          <InfoRow label="Education" value="B.Tech Electrical, PG in Data Analytics" fullWidth />
          <InfoRow
            label="Primary Occupation"
            value="AI/Data Engineer at BostonLogix LLC, Hyderabad (Product based company)"
            fullWidth
          />
          <InfoRow label="Annual Income" value="7.5 Lakh PA" fullWidth />
          <InfoRow label="Agriculture" value="3 Acres" fullWidth />
          <InfoRow label="Plot" value="Two (2 Guntas, 3 Guntas)" fullWidth />
        </div>

        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 border-b-2 border-orange-300 pb-4 mt-12">
          Family Details
        </h2>

        <div className="mb-8 space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">Father</h3>
            <InfoRow label="Name" value="Mr. Sunil Dattatray Khurd" />
            <InfoRow label="Mobile No." value="9561492785" />
            <InfoRow
              label="Occupation"
              value="Shri. Warana Sahakari Bank Ltd., Warananagar - Retired Officer"
              fullWidth
            />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">Mother</h3>
            <InfoRow label="Name" value="Mrs. Sunanda Sunil Khurd (B.Ed.)" />
            <InfoRow label="Mobile No." value="7798041836" />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">Sister</h3>
            <InfoRow label="Name" value="Mrs. Aarti Sanket Kurne" />
            <InfoRow label="Residence" value="Miraj" />
            <InfoRow label="Education" value="M.sc - Analytical Chemistry" />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">Brother-in-law</h3>
            <InfoRow label="Name" value="Mr. Sanket Nitin Kurne" />
            <InfoRow label="Mobile No." value="9552842708" />
            <InfoRow label="Occupation" value="Infosys, Pune" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 border-b-2 border-orange-300 pb-4 mt-12">
          Maternal House
        </h2>

        <div className="mb-8">
          <InfoRow
            label="Grandfather's Name"
            value="Mr. Laxman Basappa Mugulkhod, Res. Mangaon, Tal. Hatkanangale, Dist. Kolhapur"
            fullWidth
          />
          <InfoRow
            label="Relatives"
            value="Kurne-Miraj, Mugulkhod, Shete, Karvekar, Mahajan-Mangaon, Chougule-Kameri, Pethkar-Shete-Kokrud, Gadve-Mangle, Shete-Kolhapur"
            fullWidth
          />
        </div>

        <div className="mt-12 pt-6 border-t-2 border-orange-300">
          <InfoRow
            label="Residential Address"
            value="Ambap, Tal. Hatkanangale, Dist. Kolhapur"
            fullWidth
          />
        </div>

        <div className="mt-8 text-center text-2xl font-bold text-orange-800">
          || Shubham Bhavatu ||
        </div>
      </div>
    </div>
  );
}

function MarathiBiodata() {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden border-4 border-orange-600">
      <div className="border-b-4 border-orange-600 bg-gradient-to-r from-orange-100 to-red-100 p-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-800 mb-4">
            // श्री. गणेशाय नमः //
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center text-4xl">
              ॐ
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-orange-700">
            <div>// श्री. मल्लिकार्जुन प्रसन्न: //</div>
            <div>// श्री. विरभद्र प्रसन्न: //</div>
            <div>// श्री. महालक्ष्मी प्रसन्न: //</div>
            <div>// श्री. बनशंकरी प्रसन्न: //</div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 border-b-2 border-orange-300 pb-4">
          मुलाची माहिती
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          <InfoRow label="मुलाचे नांव" value="कु. ओंकार सुनील खुर्द" />
          <InfoRow label="मो.नं." value="7387748890" />
          <InfoRow label="जन्म दिनांक" value="06/09/1999" />
          <InfoRow label="जन्म वार" value="सोमवार" />
          <InfoRow label="जन्म वेळ" value="सकाळी 8:45" />
          <InfoRow label="रास" value="कर्क" />
          <InfoRow label="रक्तगट" value="O Positive" />
          <InfoRow label="नक्षत्र" value="पुनर्वसू" />
          <InfoRow label="गण" value="देव" />
          <InfoRow label="उंची" value="5 फूट 6 इंच" />
          <InfoRow label="नावरस नांव" value="हिंदूराव" />
          <InfoRow label="जात" value="लिंगायत - शिलवंत" />
        </div>

        <div className="mb-8">
          <InfoRow label="जन्म ठिकाण" value="माणगांव, ता. हातकणांगले, जि. कोल्हापूर" fullWidth />
          <InfoRow label="कुलदेवत" value="श्री विरभद्र / बनशंकरी" fullWidth />
          <InfoRow label="शिक्षण" value="B.Tech Electrical, PG in Data Analytics" fullWidth />
          <InfoRow
            label="नोकरी"
            value="AI/Data Engineer at BostonLogix LLC, Hyderabad (Product based company)"
            fullWidth
          />
          <InfoRow label="वार्षिक उत्पन्न" value="7.5 Lakh PA" fullWidth />
          <InfoRow label="शेती" value="3 एकर" fullWidth />
          <InfoRow label="प्लॉट" value="दोन (2 गुंठे, 3 गुंठे)" fullWidth />
        </div>

        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 border-b-2 border-orange-300 pb-4 mt-12">
          कौटुंबिक माहिती
        </h2>

        <div className="mb-8 space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">वडील</h3>
            <InfoRow label="नाांव" value="श्री. सुनील दत्तात्रय खर्ड" />
            <InfoRow label="मो.नं." value="9561492785" />
            <InfoRow
              label="व्यवसाय"
              value="श्री. वारणा सहकारी बँक लि., वारणानगर - सेवानिवृत्त ऑफिसर"
              fullWidth
            />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">आई</h3>
            <InfoRow label="नांव" value="सौ. सुनंदा सुनील खर्ड (B.Ed.)" />
            <InfoRow label="मो.नं." value="7798041836" />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">बहीण</h3>
            <InfoRow label="नांव" value="सौ. आरती संकेत कुरणे" />
            <InfoRow label="राहते" value="मिरज" />
            <InfoRow label="शिक्षण" value="M.sc - Analytical Chemistry" />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3 text-lg">जावई</h3>
            <InfoRow label="नांव" value="श्री. संकेत नितिन कुरणे" />
            <InfoRow label="मो.नं." value="9552842708" />
            <InfoRow label="व्यवसाय" value="Infosys, Pune" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 border-b-2 border-orange-300 pb-4 mt-12">
          आजोळ
        </h2>

        <div className="mb-8">
          <InfoRow
            label="आजोबाचे नांव"
            value="श्री. लक्ष्मण बसप्पा मुगुलखोड, रा. माणगांव, ता. हातकणांगले, जि. कोल्हापूर"
            fullWidth
          />
          <InfoRow
            label="इतर नातेवाईक"
            value="कुरणे-मिरज, मुगुलखोड, शेटे, कावेकर, महाजन-माणगांव, चौगुले-कामेरी, पेठकर-शेटे-कोकरूड, गाडवे-मांगले, शेटे-कोल्हापूर"
            fullWidth
          />
        </div>

        <div className="mt-12 pt-6 border-t-2 border-orange-300">
          <InfoRow
            label="घरचा पत्ता"
            value="रा.अंबप, ता.हातकणंगले, जि. कोल्हापूर"
            fullWidth
          />
        </div>

        <div className="mt-8 text-center text-2xl font-bold text-orange-800">
          || शुभं भवतु ||
        </div>
      </div>
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
  fullWidth?: boolean;
}

function InfoRow({ label, value, fullWidth }: InfoRowProps) {
  return (
    <div className={`${fullWidth ? 'col-span-full' : ''} flex gap-2 py-2 border-b border-orange-100`}>
      <span className="font-semibold text-orange-800 min-w-[140px]">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}

export default App;
