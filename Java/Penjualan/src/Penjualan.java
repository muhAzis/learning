import java.util.Date;
import java.util.Scanner;

public class Penjualan {
    public static int save(Date dob) {
        System.out.println(" ");
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println(" ");
        System.out.println("Nama barang        = Sate Kumis");
        System.out.println("Harga barang       = Rp950");
        System.out.print("Jumlah yang dibeli = ");
        int jumlahBarang = Integer.parseInt(input.nextLine());

        System.out.println("_______________________________________");
        System.out.println("Total harga          = Rp" + (jumlahBarang * 950));

        save(new Date());
    }
}