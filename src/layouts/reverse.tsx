
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ReverseLayout({ children }: React.PropsWithChildren<{}>) {

    return (
        <div className="min-h-screen transition-colors duration-150">
            {/* <Footer /> */}
            <Header />
            {children}
            
        </div>
    );
}
export const letLayout = (page: React.ReactElement) => (
    <ReverseLayout>{page}</ReverseLayout>
);
