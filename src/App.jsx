import React, { useState } from 'react';
import { 
  Heart, Play, Search, Moon, Smile, User, ChevronRight, Star, Sparkles, Coffee, Music, Zap, Film, Send,
  Instagram, Twitter, Facebook, Menu, Tv, BookOpen, Headphones, Award, ThumbsUp, Bookmark, Layers, Globe, ArrowRight
} from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = [
    { 
      name: "Happy", 
      icon: <Smile className="h-8 w-8 text-[#EE227D]" />, 
      color: "from-amber-600/30 to-yellow-500/30", 
      shows: ["Ted Lasso", "The Good Place"],
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=600&q=80"
    },
    { 
      name: "Chill", 
      icon: <Coffee className="h-8 w-8 text-[#EE227D]" />, 
      color: "from-[#852A67]/30 to-[#FD8083]/30", 
      shows: ["The Office", "Friends"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    { 
      name: "Romantic", 
      icon: <Heart className="h-8 w-8 text-[#EE227D]" />, 
      color: "from-rose-600/30 to-pink-500/30", 
      shows: ["Bridgerton", "Pride & Prejudice"],
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
    },
    { 
      name: "Energetic", 
      icon: <Zap className="h-8 w-8 text-[#EE227D]" />, 
      color: "from-[#852A67]/30 to-[#FD8083]/30", 
      shows: ["Stranger Things", "The Boys"],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
    },
    { 
      name: "Melancholy", 
      icon: <Moon className="h-8 w-8 text-[#EE227D]" />, 
      color: "from-[#852A67]/30 to-[#FD8083]/30", 
      shows: ["This Is Us", "The Fault in Our Stars"],
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const features = [
    { 
      title: "Select Your Mood", 
      icon: <Smile className="h-10 w-10 text-[#EE227D]" />, 
      description: "Choose your emotional state with our intuitive mood selector, guiding your personalized experience.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Curated Content", 
      icon: <Sparkles className="h-10 w-10 text-[#EE227D]" />, 
      description: "Our AI crafts entertainment selections that resonate with your current mood.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Seamless Streaming", 
      icon: <Play className="h-10 w-10 text-[#EE227D]" />, 
      description: "Stream directly or locate your mood-matched content with ease.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Mood Journey", 
      icon: <Music className="h-10 w-10 text-[#EE227D]" />, 
      description: "Track how your entertainment evolves with your emotions over time.",
      image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const curations = [
    { 
      title: "Sunset Serenity", 
      type: "Movies & Shows", 
      description: "Tranquil content for peaceful evenings.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Morning Motivation", 
      type: "Music & Podcasts", 
      description: "Uplifting selections to start your day.",
      image: "https://i.pinimg.com/736x/d5/24/75/d52475d29fbe16bca71cbdc1843df268.jpg"
    },
    { 
      title: "Midnight Reflections", 
      type: "Mixed Media", 
      description: "Contemplative pieces for late-night musings.",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Weekend Wanderlust", 
      type: "Travel & Adventure", 
      description: "Explore new worlds from the comfort of home.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    { 
      name: "Alex Johnson", 
      text: "MoodHub's recommendations are spot-on, transforming how I discover content!", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a48e?auto=format&fit=crop&w=200&q=80",
      role: "Film Enthusiast" 
    },
    { 
      name: "Sarah Williams", 
      text: "It's like having a friend who knows exactly what I need to watch when I'm down.", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      role: "Content Creator" 
    },
    { 
      name: "Michael Chen", 
      text: "The mood-based playlists introduced me to amazing shows I’d have missed.", 
      rating: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      role: "Tech Journalist" 
    }
  ];

  const contentTypes = [
    { title: "Movies & TV Shows", icon: Tv, description: "From blockbusters to indie gems" },
    { title: "Music & Playlists", icon: Music, description: "Tracks that match your vibe" },
    { title: "Books & Audiobooks", icon: BookOpen, description: "Stories that resonate" },
    { title: "Podcasts", icon: Headphones, description: "Conversations that captivate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3B0855] to-slate-900 text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-effect bg-[#3B0855]/80 border-b border-[#EE227D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold font-serif text-gradient">MoodHub</span>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-8">
                  {['Home', 'Categories', 'About', 'Contact'].map((item) => (
                    <a key={item} href="#" className="text-[#FD8083] hover:text-[#EE227D] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-full bg-[#852A67]/50 hover:bg-[#852A67]/70 transition-colors duration-300">
                <Search className="h-5 w-5 text-[#EE227D]" />
              </button>
              <button className="p-2 rounded-full bg-[#852A67]/50 hover:bg-[#852A67]/70 transition-colors duration-300">
                <Smile className="h-5 w-5 text-[#EE227D]" />
              </button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#852A67] to-[#FD8083] text-white hover:from-[#852A67]/90 hover:to-[#FD8083]/90 transition-all duration-300 flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium">Sign In</span>
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 rounded-full bg-[#852A67]/50 hover:bg-[#852A67]/70 transition-colors duration-300"
            >
              <Menu className="h-5 w-5 text-[#EE227D]" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect bg-[#3B0855]/95 p-4">
            <div className="flex flex-col space-y-2">
              {['Home', 'Categories', 'About', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-[#FD8083] hover:text-[#EE227D] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-br from-[#3B0855] to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
            alt="Retro-futuristic cityscape at sunset" 
            className="w-full h-full object-cover animate-slow-zoom"
            style={{ 
              willChange: 'transform',
              animation: 'slowZoom 20s infinite alternate, parallax 1s ease-out'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B0855]/50 to-slate-900/80 z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#852A67]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FD8083]/20 rounded-full blur-3xl"></div>

        <style>
          {`
            @keyframes slowZoom {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(1.1);
              }
            }
            @keyframes parallax {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(20px);
              }
            }
          `}
        </style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-32 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Your Mood, Your Story.
          </h1>
          <p className="text-xl md:text-2xl text-[#FD8083] mb-10 max-w-3xl mx-auto">
            Discover movies, shows, music, and books curated to resonate with your emotions, crafted for a truly personal experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-[#852A67] to-[#FD8083] text-white font-medium rounded-full hover:from-[#852A67]/90 hover:to-[#FD8083]/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#3B0855]/50">
              Explore Now
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-[#852A67] to-[#FD8083] text-white font-medium rounded-full hover:from-[#852A67]/90 hover:to-[#FD8083]/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#3B0855]/50">
              Set Your Mood
              <Smile className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Happy", "Relaxed", "Romantic", "Energetic", "Melancholy"].map((mood) => (
              <button 
                key={mood}
                className="px-4 py-2 rounded-full text-sm bg-[#852A67]/50 text-[#FD8083] hover:bg-[#852A67]/70 hover:text-[#EE227D] border border-[#EE227D]/20 hover:border-[#EE227D]/30 transition-all duration-300"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-[#3B0855] relative">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-[#852A67]/20 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-[#FD8083]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">How It Works</h2>
            <p className="text-[#FD8083] max-w-2xl mx-auto text-lg">Our intelligent system curates entertainment that perfectly aligns with your emotional state.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-effect p-8 rounded-3xl border border-[#EE227D]/20 hover:border-[#EE227D]/40 hover-scale transition-all duration-300"
              >
                <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mb-5 bg-[#852A67]/50 p-4 rounded-2xl inline-block hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#FD8083]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mood Categories */}
      <section className="py-24 bg-[#3B0855] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EE227D_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Browse by Mood</h2>
            <p className="text-[#FD8083] max-w-2xl mx-auto text-lg">Select your mood to uncover content tailored to your emotions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`glass-effect p-6 rounded-3xl border border-[#EE227D]/20 hover:border-[#EE227D]/30 hover-scale transition-all duration-300 relative h-80 overflow-hidden`}
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B0855]/90 to-transparent z-10"></div>
                <div className="relative z-20 h-full flex flex-col items-center">
                  <div className="mb-4 p-3 bg-[#852A67]/50 rounded-full border border-[#EE227D]/50 hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{category.name}</h3>
                  <div className="space-y-1 mt-auto text-center">
                    {category.shows.map((show) => (
                      <p key={show} className="text-sm text-[#FD8083]">{show}</p>
                    ))}
                    <button className="mt-6 px-4 py-2 bg-[#852A67]/50 rounded-full text-sm text-white border border-[#EE227D]/20 hover:bg-[#852A67]/70 transition-colors duration-300">
                      Explore {category.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Curations */}
      <section className="py-24 bg-gradient-to-b from-[#3B0855] to-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#852A67]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FD8083]/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Premium Curations</h2>
            <p className="text-[#FD8083] max-w-2xl mx-auto text-lg">Expertly crafted collections, updated weekly to match your every mood.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curations.map((curation) => (
              <div
                key={curation.title}
                className="relative h-96 rounded-3xl overflow-hidden hover-scale transition-all duration-300"
              >
                <img 
                  src={curation.image} 
                  alt={curation.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B0855] to-transparent z-10"></div>
                <div className="absolute inset-0 border border-[#EE227D]/20 hover:border-[#EE227D]/30 rounded-3xl transition-all duration-300 z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="glass-effect p-6 rounded-2xl border border-[#EE227D]/20 hover:border-[#EE227D]/30 transition-all duration-300">
                    <p className="text-sm text-[#EE227D] mb-2">{curation.type}</p>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{curation.title}</h3>
                    <p className="text-[#FD8083] text-sm mb-4">{curation.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Film className="h-4 w-4 text-[#EE227D] mr-2" />
                        <span className="text-sm text-[#FD8083]">18 titles</span>
                      </div>
                      <button className="p-3 bg-[#852A67]/50 hover:bg-[#852A67]/70 rounded-full transition-all duration-300">
                        <ChevronRight className="h-4 w-4 text-[#FD8083]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mood Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">This Week's Featured Mood</h2>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#852A67]/50 rounded-full mr-3">
                  <Sparkles className="h-6 w-6 text-[#EE227D]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white">Inspiring</h3>
              </div>
              <p className="text-[#FD8083] text-lg mb-8">Discover content that fuels your passion, from award-winning documentaries to uplifting stories of triumph.</p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Award className="h-5 w-5 text-[#EE227D] mr-3" />, text: "Award-winning documentaries" },
                  { icon: <ThumbsUp className="h-5 w-5 text-[#EE227D] mr-3" />, text: "True stories of triumph" },
                  { icon: <Music className="h-5 w-5 text-[#EE227D] mr-3" />, text: "Motivational playlists" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    {item.icon}
                    <span className="text-[#FD8083]">{item.text}</span>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#852A67] to-[#FD8083] text-white font-medium rounded-full hover:from-[#852A67]/90 hover:to-[#FD8083]/90 transition-all duration-300 flex items-center gap-2">
                Explore Inspiring Content
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden relative aspect-[4/5] shadow-2xl shadow-[#3B0855]/30">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                alt="Inspiring content" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B0855] to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#EE227D] fill-[#EE227D]" />
                    ))}
                  </div>
                  <span className="text-white">Editor's Pick</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2">Mountains Beyond Mountains</h4>
                <p className="text-[#FD8083]">A documentary inspiring global change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-[#3B0855] relative">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#852A67]/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Content for Every Mood</h2>
            <p className="text-[#FD8083] max-w-2xl mx-auto">Explore a variety of media formats curated to match your emotional needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((item) => (
              <div
                key={item.title}
                className="glass-effect p-8 rounded-2xl border border-[#EE227D]/20 hover:border-[#EE227D]/30 hover-scale transition-all duration-300"
              >
                <div className="flex justify-center mb-8">
                  <div className="p-5 bg-[#852A67]/50 rounded-xl hover:scale-105 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-[#EE227D]" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-[#FD8083] text-center mb-6">{item.description}</p>
                <div className="mt-auto flex justify-center">
                  <button className="px-4 py-2 bg-[#852A67]/50 hover:bg-[#852A67]/70 text-[#FD8083] rounded-full text-sm transition-colors duration-300 flex items-center gap-2">
                    Browse {item.title.split(' ')[0]}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#3B0855] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EE227D_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-[#FD8083]/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">What Our Users Say</h2>
            <p className="text-[#FD8083] max-w-2xl mx-auto text-lg">Join thousands who’ve found their perfect content match.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="glass-effect p-8 rounded-3xl border border-[#EE227D]/20 hover:border-[#EE227D]/40 hover-scale transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#EE227D]/30"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[#852A67] p-1 rounded-full">
                      <Star className="h-3 w-3 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white">{testimonial.name}</h4>
                    <p className="text-[#EE227D] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#EE227D] fill-[#EE227D]" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-4 w-4 text-slate-600" />
                  ))}
                </div>
                <p className="text-[#FD8083] italic mb-6 flex-grow">“{testimonial.text}”</p>
                <div className="py-2 px-4 bg-[#852A67]/30 rounded-full inline-flex items-center text-sm text-[#FD8083]">
                  <Bookmark className="h-3 w-3 mr-2" />
                  Verified User
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-[#EE227D] hover:text-[#FD8083] transition-colors duration-300 font-medium">
              Read more stories
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative bg-gradient-to-br from-[#3B0855] to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80" 
            alt="Entertainment collage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B0855]/50 to-slate-900/80 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-[#EE227D] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Tailored Mood Recommendations
            </h2>
            <p className="text-xl text-[#FD8083] mb-10">
              Subscribe for weekly curated content designed for your emotional preferences.
            </p>
            <div className="glass-effect p-8 rounded-3xl border border-[#EE227D]/30 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow">
                  <label htmlFor="email" className="block text-sm font-medium text-[#FD8083] text-left mb-2">Email address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 rounded-xl bg-[#852A67]/50 border border-[#EE227D]/30 focus:border-[#EE227D]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#EE227D]/30 transition-all duration-300"
                  />
                </div>
                <button className="md:self-end px-6 py-3 bg-gradient-to-r from-[#852A67] to-[#FD8083] text-white font-medium rounded-xl hover:from-[#852A67]/90 hover:to-[#FD8083]/90 transition-all duration-300 flex items-center justify-center gap-2">
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="preferences" 
                    className="h-4 w-4 rounded border-[#EE227D]/30 text-[#EE227D] focus:ring-[#EE227D]/30"
                  />
                  <label htmlFor="preferences" className="ml-2 text-[#FD8083]">Set mood preferences</label>
                </div>
                <span className="text-[#EE227D]/70">We value your privacy. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[9/16] max-w-xs mx-auto bg-[#852A67] rounded-[3rem] p-3 border-8 border-[#3B0855] shadow-2xl shadow-[#3B0855]/30">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-[#3B0855] rounded-b-xl"></div>
                <div className="w-full h-full overflow-hidden rounded-[2.5rem]">
                  <img 
                    src="https://i.pinimg.com/736x/ab/aa/df/abaadfffe27161bccc193e6335df8827.jpg" 
                    alt="MoodHub mobile app" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-1/4 right-0 w-16 h-16 bg-[#852A67]/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/3 left-0 w-24 h-24 bg-[#FD8083]/20 rounded-full blur-xl"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Your Moods, Anywhere
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Cross-Platform Sync",
                    icon: <Layers className="h-6 w-6 text-[#EE227D]" />,
                    description: "Seamlessly switch devices while keeping your mood preferences intact."
                  },
                  {
                    title: "Offline Access",
                    icon: <Bookmark className="h-6 w-6 text-[#EE227D]" />,
                    description: "Save recommendations for offline enjoyment, anytime, anywhere."
                  },
                  {
                    title: "Global Content",
                    icon: <Globe className="h-6 w-6 text-[#EE227D]" />,
                    description: "Discover mood-matched content from cultures worldwide."
                  }
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-6">
                    <div className="flex-shrink-0 p-4 bg-[#852A67]/50 rounded-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-[#FD8083]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#852A67] to-[#FD8083] text-white font-medium rounded-xl hover:from-[#852A67]/90 hover:to-[#FD8083]/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#3B0855]/30">
                  Download App
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="px-8 py-4 bg-[#852A67]/50 text-[#FD8083] font-medium rounded-xl hover:bg-[#852A67]/70 border border-[#EE227D]/20 hover:border-[#EE227D]/30 transition-all duration-300 flex items-center gap-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B0855] border-t border-[#EE227D]/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gradient mb-6">MoodHub</h3>
              <p className="text-[#FD8083] mb-6">Entertainment that resonates with your emotions.</p>
              <div className="flex space-x-4">
                {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                  <a key={idx} href="#" className="p-2 bg-[#852A67]/50 hover:bg-[#852A67]/70 rounded-full transition-colors duration-300">
                    <Icon className="h-5 w-5 text-[#EE227D]" />
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Explore", links: ["Categories", "Moods", "Collections", "New Releases", "Trending", "Premium Content"] },
              { title: "Company", links: ["About", "Team", "Careers", "Press Kit", "Partners", "Contact Us"] },
              { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Content Guidelines", "Accessibility", "Support"] }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-serif font-bold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#FD8083] hover:text-[#EE227D] transition-colors duration-300">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-[#EE227D]/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#EE227D]/70 text-sm mb-4 md:mb-0">
              © 2025 MoodHub. All rights reserved. Images by <a href="https://unsplash.com" className="underline hover:text-[#FD8083]">Unsplash</a>.
            </p>
            <div className="flex space-x-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-[#FD8083] hover:text-[#EE227D] text-sm transition-colors duration-300">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;