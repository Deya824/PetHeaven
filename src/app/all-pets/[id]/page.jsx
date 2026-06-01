import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import AdoptionForm from "@/components/AdoptionForm";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petData/${id}`, {
    headers: { authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) notFound();
  const pet = await res.json();
  if (!pet) notFound();

  return (
    <div className="min-h-screen bg-[#fcf8e3] py-12 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Image & Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px]">
            <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {pet.adopted ? "Adopted" : "Available"}
            </div>
          </div>

          {/* Header Info */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-orange-100">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-extrabold text-[#1a1a1a]">{pet.name}</h1>
                <p className="text-[#f97316] font-bold mt-1 text-lg">{pet.species} • {pet.breed}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 font-bold uppercase">Adoption Fee</p>
                <p className="text-3xl font-black text-[#1a1a1a]">{pet.adoptionFee > 0 ? `$${pet.adoptionFee}` : 'Free'}</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: "Age", value: pet.age },
                { label: "Gender", value: pet.gender },
                { label: "Location", value: pet.location },
                { label: "Vaccinated", value: pet.vaccinationStatus },
              ].map((item, i) => (
                <div key={i} className="bg-[#fcf8e3] p-4 rounded-2xl border border-orange-100/50">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">{item.label}</p>
                  <p className="font-extrabold text-[#1a1a1a] mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-orange-100">
            <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-4">About {pet.name}</h2>
            <p className="text-gray-600 leading-relaxed font-medium">{pet.description}</p>
          </div>

          {/* Owner Info */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] font-black text-2xl">
              {pet.ownerName?.[0]}
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">Owned by</p>
              <p className="font-extrabold text-[#1a1a1a]">{pet.ownerName}</p>
              <p className="text-gray-500 text-sm">{pet.ownerEmail}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <AdoptionForm pet={pet} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PetDetailsPage;